    // SPDX-License-Identifier: UNLICENSED
    pragma solidity ^0.8.19;

    import {IMailbox} from "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";
    import {IPostDispatchHook} from "@hyperlane-xyz/core/contracts/interfaces/hooks/IPostDispatchHook.sol";
    import {IInterchainSecurityModule} from "@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol";
    import {Address} from "@openzeppelin/contracts/utils/Address.sol";
    import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";


    contract CipherTextCommitment is OwnableUpgradeable{
        IPostDispatchHook public hook;
        address mailbox;
        address recipient;
        mapping (bytes32 =>bytes32) hash;
        uint32 DomainID=9090;
        function setHook(address _hook) public onlyOwner {
            hook = IPostDispatchHook(_hook);
        }
        event hasher(bytes32 _hash);
    constructor(address _mailbox,address _recipient) {
            mailbox = _mailbox;
            recipient=_recipient;
        }
        modifier onlyMailbox() {
            require(
                msg.sender == mailbox,
                "Only mailbox can call this function !!!"
            );
            _;
        }

        function CommitCiphertextHash(bytes calldata Ciphertext) payable external
        {
            bytes32 _hash = keccak256(Ciphertext);
            hash[_hash]=_hash;
        uint256 quote = IMailbox(mailbox).quoteDispatch(DomainID,addressToBytes32(recipient),abi.encode(_hash));
            IMailbox(mailbox).dispatch{value: quote}(DomainID,addressToBytes32(recipient),abi.encode(_hash));
        emit  hasher(_hash);
        }

        function addressToBytes32(address _addr) internal pure returns (bytes32) {
            return bytes32(uint256(uint160(_addr)));
        }
    }