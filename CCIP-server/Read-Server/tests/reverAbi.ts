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
const revertData = "0x556f183000000000000000000000000030fc148176246660e699e2acd6621d8612c2e4b100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001407c39d1300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002668747470733a2f2f68797065726c616e652d636369702d366b33332e76657263656c2e61707000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024fe7ebe83c5576696a293b93ce6684eb8c732460474479665eceee3b4b5de601fc51789f700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006d03000b4d4600aa36a70000000000000000000000000452ba29eee9cc61cfbd738e25c612a7b1667b070000238200000000000000000000000065d21758e0008b24fbb8f5c1d7542eefe37bf93cc5576696a293b93ce6684eb8c732460474479665eceee3b4b5de601fc51789f700000000000000000000000000000000000000";

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
