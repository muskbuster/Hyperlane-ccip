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
const revertData = "0x556f183000000000000000000000000030fc148176246660e699e2acd6621d8612c2e4b100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001607c39d1300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000005868747470733a2f2f333030322d6d75736b6275737465722d68797065726c616e656363692d37306d6a6e626c733936702e77732d75733131342e676974706f642e696f2f7b73656e6465727d2f7b646174617d2e6a736f6e00000000000000000000000000000000000000000000000000000000000000000000000000000024fe7ebe8352b0ec41163daa3472ad236b9c43b4d9843b1c64a99f41c8313c5c2e1eeea71b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006d03000b4d2d00aa36a70000000000000000000000000452ba29eee9cc61cfbd738e25c612a7b1667b070000238200000000000000000000000065d21758e0008b24fbb8f5c1d7542eefe37bf93c52b0ec41163daa3472ad236b9c43b4d9843b1c64a99f41c8313c5c2e1eeea71b00000000000000000000000000000000000000";

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
