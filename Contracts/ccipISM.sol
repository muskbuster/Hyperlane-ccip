pragma solidity ^0.8.13;

import {AbstractCcipReadIsm} from "@hyperlane-xyz/core/contracts/isms/ccip-read/AbstractCcipReadIsm.sol";
import {IInterchainSecurityModule, ISpecifiesInterchainSecurityModule} from "@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol";
import {IMailbox} from "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";
import {Message} from "@hyperlane-xyz/core/contracts/libs/Message.sol";
import {Indexed} from "Indexed.sol";
import {TypeCasts} from "TypeCasts.sol";
import {Versioned} from "Modifs/Versioned.sol";

interface Gateway {
    function getCipher(bytes32 _message) external view returns (bytes memory _meta);
}

interface IMessageRecipient {
    function handleWithCiphertext(
        bytes calldata _message
    ) external payable;
}
contract MyCcipReadIsm is AbstractCcipReadIsm, ISpecifiesInterchainSecurityModule {
    using Message for bytes;
    IMailbox mailbox;
    string[] public offChainURLs;

    // Constructor to initialize the offChainURLs array
    constructor(string memory initialURL) {
        setURL(initialURL);
    }

    /**
     * No-op, everything happens in the verify function
     */
    function handle(uint32, bytes32, bytes calldata _report) public {}

    /**
     * @param _metadata ABI encoded module metadata
     * @param _message Formatted Hyperlane message (see Message.sol).
     */
    function verify(
        bytes calldata _metadata,
        bytes calldata _message
    ) external  returns (bool) {
        // Decode the sender and committedHash from the message
        require(_message.version() == 3, "Mailbox: bad version");
        address recipient=_message.recipientAddress();
        bytes memory message = _message.body();
        (address sender, bytes32 committedHash) = abi.decode(message, (address, bytes32));
        // Hash the metadata
        bytes32 metadataHash = keccak256(_metadata);
        bytes memory Ciphertext= abi.encode(message,_metadata);
        // Check if the hashed metadata matches the committedHash
        if (metadataHash == committedHash) {
            IMessageRecipient(recipient).handleWithCiphertext(Ciphertext);
            return true;
            
        } else {
            return false;
        }
    }

    function setURL(string memory _urls) internal {
        delete offChainURLs;
        offChainURLs.push(_urls);
    }

    function interchainSecurityModule()
        external
        view
        returns (IInterchainSecurityModule)
    {
        return IInterchainSecurityModule(address(this));
    }

    function getOffchainVerifyInfo(
        bytes calldata _message
    ) external view override {
        require(_message.version() == 3, "Mailbox: bad version");
        bytes memory message = _message.body();
        (address sender, bytes32 committedHash) = abi.decode(message, (address, bytes32));
        revert OffchainLookup(
            address(this),
            offChainURLs,
            abi.encodeWithSelector(Gateway.getCipher.selector, committedHash),
            MyCcipReadIsm.process.selector,
            _message
        );
    }

    /**
     * Provided for full CCIP Read specification compatibility. Relayers
     * will call the Mailbox directly regardless of the selector specified
     * in the `OffchainLookup` error
     */
    function process(
        bytes calldata _metadata,
        bytes calldata _message
    ) external {
        mailbox.process(_metadata, _message);
    }
}
