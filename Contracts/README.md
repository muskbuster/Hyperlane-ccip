# Deployment 

step 1 - cd to '/Hyperlane-ccip/Contracts'
step 2 - install dependencies `npm i`
step 3 - input private key in hardhat config
step 4 - run `npx hardhat run scripts/deploy.js --network inco` 
step 5 - input the mailbox address and CCIP-ISM upon prompt(addresses are available in gitbook doc)
step 6 - Uncomment the deployment code for sepolia and run `npx hardhat run scripts/deploy.js --network sepolia`
