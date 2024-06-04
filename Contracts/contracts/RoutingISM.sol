pragma solidity ^0.8.13;

import {AbstractCcipReadIsm} from "@hyperlane-xyz/core/contracts/isms/ccip-read/AbstractCcipReadIsm.sol";
import {IInterchainSecurityModule, ISpecifiesInterchainSecurityModule} from "@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol";
import {IMailbox} from "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";
import {Message} from "@hyperlane-xyz/core/contracts/libs/Message.sol";
import {AbstractRoutingIsm} from "@hyperlane-xyz/core/contracts/isms/routing/AbstractRoutingIsm.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract CiphertextRoutingIsm is AbstractRoutingIsm {
    using Message for bytes;
    address public CCIPISM;
    address public MultisigISM;

    constructor(address _ccipISM, address _multisigISM) {
        CCIPISM = _ccipISM;
        MultisigISM = _multisigISM;
    }

    function route(
        bytes calldata _message
    ) public view override returns (IInterchainSecurityModule) {
        bytes memory message = _message.body();
     (uint8 msgtype) = abi.decode(message, (uint8));
     address ISM;
     if (msgtype==0)
     {
         ISM=CCIPISM;
     }
     else {
         ISM=MultisigISM;
     }
        return IInterchainSecurityModule(ISM);
    }

}
