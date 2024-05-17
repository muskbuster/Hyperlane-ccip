// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IMailbox} from "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";
import {IPostDispatchHook} from "@hyperlane-xyz/core/contracts/interfaces/hooks/IPostDispatchHook.sol";
import {IInterchainSecurityModule} from "@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract CipherTextProcessor is OwnableUpgradeable{
    IInterchainSecurityModule public interchainSecurityModule;
        function setInterchainSecurityModule(address _module) public {
        interchainSecurityModule = IInterchainSecurityModule(_module);
    }
    event handled (address sender,bytes32 hash);
    address mailbox; // address of mailbox contract
    address public ISM;
    struct CiphertextDetails{
        uint32 origin;
        bytes32 sender;
        bytes ciphertext;
    }
    mapping(bytes32 => CiphertextDetails) public CiphertextTrack; 

    constructor(address _mailbox, address _interchainSecurityModule) {
        mailbox = _mailbox;
        ISM=_interchainSecurityModule;
        setInterchainSecurityModule(_interchainSecurityModule);
        
    }

    // Modifier so that only mailbox can call particular functions
    modifier onlyMailbox() {
        require(
            msg.sender == mailbox,
            "Only mailbox can call this function !!!"
        );
        _;
    }
        modifier onlyISM() {
        require(
            msg.sender == ISM,
            "Only mailbox can call this function !!!"
        );
        _;
    }
  function handle( uint32 _origin,
        bytes32 _sender,
        bytes memory _body)external onlyMailbox {
           (address sender, bytes32 committedHash)=  abi.decode(_body, (address, bytes32));
           emit handled(sender, committedHash);

  }
  function handleWithCiphertext( uint32 _origin,
        bytes32 _sender,
        bytes calldata _message)external payable onlyISM{
  (bytes memory message,bytes memory ciphertext)=abi.decode(_message,(bytes , bytes));
   (address sender, bytes32 committedHash)=  abi.decode(message, (address, bytes32));
   CiphertextDetails memory data = CiphertextDetails(
    _origin,
    _sender,
    ciphertext
   );
   CiphertextTrack[committedHash]=data;
        }

}