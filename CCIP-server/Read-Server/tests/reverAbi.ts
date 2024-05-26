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
const revertData = "0x556f1830000000000000000000000000285263b23a0f012be016a93c26c1acbdcbfde44c00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001407c39d1300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000003b68747470733a2f2f68797065726c616e652d636369702d366b33332e76657263656c2e6170702f7b73656e6465727d2f7b646174617d2e6a736f6e00000000000000000000000000000000000000000000000000000000000000000000000024fe7ebe83000abe106d7d117e56719855a670ef89a02092a22d3110cd3bcf8ecc76d4815900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006d03000b4d6700aa36a7000000000000000000000000d8cf1911fefbec7d2ced52d09aee6f13a7ad48b4000023820000000000000000000000000bdc9819098dddfd4e4f799c865e8a6d5c16d2ba000abe106d7d117e56719855a670ef89a02092a22d3110cd3bcf8ecc76d4815900000000000000000000000000000000000000";

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
