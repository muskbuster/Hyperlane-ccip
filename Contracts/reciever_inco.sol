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
    
    address mailbox; // address of mailbox contract
    mapping (bytes32=>bytes) public  ciphertext;

    constructor(address _mailbox, address _interchainSecurityModule) {
        mailbox = _mailbox;
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
  function handle( uint32 _origin,
        bytes32 _sender,
        bytes memory _body)external onlyMailbox {
           (address sender, bytes32 committedHash)=  abi.decode(_body, (address, bytes32));
        storCipherText(committedHash,"");

  }
  function storCipherText(bytes32 _hash,bytes memory _ciphertext) internal 
  {
    ciphertext[_hash]=_ciphertext;
  }
}