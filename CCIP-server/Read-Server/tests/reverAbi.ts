import { ethers } from "ethers";

// ABI for the OffchainLookup error
const abi = [
  {
    "inputs": [
      { "internalType": "address", "name": "sender", "type": "address" },
      { "internalType": "string[]", "name": "urls", "type": "string[]" },
      { "internalType": "bytes", "name": "callData", "type": "bytes" },
      { "internalType": "bytes4", "name": "callbackFunction", "type": "bytes4" },
      { "internalType": "bytes", "name": "extraData", "type": "bytes" }
    ],
    "name": "OffchainLookup",
    "type": "error"
  }
];

// Initialize an Interface object with the ABI
const iface = new ethers.utils.Interface(abi);

// Revert data to be decoded
const revertData = "0x556f1830000000000000000000000000dc44c3e76f8f69ff793607cf9033d1d7fd5f783e00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001407c39d1300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000003b68747470733a2f2f68797065726c616e652d636369702d366b33332e76657263656c2e6170702f7b73656e6465727d2f7b646174617d2e6a736f6e00000000000000000000000000000000000000000000000000000000000000000000000024fe7ebe839bd029fa903b1176c19bf3f90ec3ab5b8ac5573cc91446dbbad8cd5b446c2dd500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006d03000b4d8400aa36a70000000000000000000000007f3968d02d8d16f58cc54a40cd1e4a815e6684b80000238200000000000000000000000048b6e448c7b6db38c283bed8c375cb0069072e2f9bd029fa903b1176c19bf3f90ec3ab5b8ac5573cc91446dbbad8cd5b446c2dd500000000000000000000000000000000000000";

// Decode the data
const decoded = iface.decodeErrorResult("OffchainLookup", revertData);

// Extract and log the parameters
const sender = decoded.sender;
const urls = decoded.urls;
const callData = decoded.callData;
const callbackFunction = decoded.callbackFunction;
const extraData = decoded.extraData;

console.log("Sender:", sender);
console.log("URLs:", urls);
console.log("Call Data:", callData);
console.log("Callback Function:", callbackFunction);
console.log("Extra Data:", extraData);
