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
const revertData = "0x556f183000000000000000000000000030fc148176246660e699e2acd6621d8612c2e4b100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001407c39d1300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002668747470733a2f2f68797065726c616e652d636369702d366b33332e76657263656c2e61707000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024fe7ebe8352b0ec41163daa3472ad236b9c43b4d9843b1c64a99f41c8313c5c2e1eeea71b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006d03000b4d5700aa36a70000000000000000000000008f7dd99a2d7e106626e78d0b22d8e9d0371cbd330000238200000000000000000000000065d21758e0008b24fbb8f5c1d7542eefe37bf93c52b0ec41163daa3472ad236b9c43b4d9843b1c64a99f41c8313c5c2e1eeea71b00000000000000000000000000000000000000";

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
