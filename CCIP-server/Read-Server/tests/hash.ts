import { ethers } from 'ethers';

// Convert input hex string to bytes
const inputHex = "0x11";
const inputBytes = ethers.utils.arrayify(inputHex);

// Hash the input using keccak256
const hash = ethers.utils.keccak256(inputBytes);

console.log(`Hashed input (JavaScript): ${hash}`);
