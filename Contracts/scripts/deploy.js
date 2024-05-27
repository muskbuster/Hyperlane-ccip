// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  // Get the contract factories
  const CipherTextProcessor = await hre.ethers.getContractFactory("CipherTextProcessor");
  const CipherTextCommitment = await hre.ethers.getContractFactory("CipherTextCommitment");

  // Get user input for addresses
  const mailboxAddress = prompt("Enter the Mailbox address for Sepolia:");
  const recipientAddress = prompt("Enter the Recipient address for Sepolia:");
  const interchainSecurityModuleAddress = prompt("Enter the ISM address for INCO:");
  // in INCO
  // Deploy CipherTextProcessor to INCO
  console.log("Deploying CipherTextProcessor to INCO...");
  const processor = await CipherTextProcessor.deploy(mailboxAddress, interchainSecurityModuleAddress);
  await processor.deployed();
  console.log("CipherTextProcessor deployed to INCO at:", processor.address);
// In sepolia
//   // Deploy CipherTextCommitment to Sepolia
//   console.log("Deploying CipherTextCommitment to Sepolia...");
//   const commitment = await CipherTextCommitment.deploy(mailboxAddress, recipientAddress);
//   await commitment.deployed();
//   console.log("CipherTextCommitment deployed to Sepolia at:", commitment.address);
// }

function prompt(question) {
  const readlineSync = require('readline-sync');
  return readlineSync.question(question);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
