import { ethers } from 'ethers';
import { CipherTextABI } from '../src/abis/CiphertextServiceAbi'; // Adjust the path as needed

// Example hash input
const exampleHash = "0x17a2b4dec50da45152d765c45dd7cf8c299c7731b188aab3a91904af76c18b8d";

// Create an Interface object from the JSON-format ABI
const iface = new ethers.utils.Interface(CipherTextABI);

// Encode function data with the selector for the `getCipher` function
const data = iface.encodeFunctionData("getCipher", [exampleHash]);

console.log("Encoded ABI with selector:", data);
