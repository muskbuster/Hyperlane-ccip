import { ethers } from 'ethers';
import { CipherTextABI } from '../src/abis/CiphertextServiceAbi'; // Adjust the path as needed

// Example hash input
const exampleHash = "0x6c3bf3dccc39df78b946f2d49077e90fc88a90c7c3f06ab17244a9850d3dc85b";

// Create an Interface object from the JSON-format ABI
const iface = new ethers.utils.Interface(CipherTextABI);

// Encode function data with the selector for the `getCipher` function
const data = iface.encodeFunctionData("getCipher", [exampleHash]);

console.log("Encoded ABI with selector:", data);
