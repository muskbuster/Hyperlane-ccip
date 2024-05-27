require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
  defaultNetwork: "hardhat",
  gasReporter: {
    enabled: true,
  },
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: "",
          balance: "1000000000000000000000",
        },
      ],
    },
    inco: {
      url: "https://testnet.inco.org",
      accounts: [""],
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/o4D6p25CnIxRBE9Ce1R6_gciUEpZbqw8",
      accounts: [""],
    },
    scrollSepolia: {
      url: "https://rpc.ankr.com/scroll_sepolia_testnet/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
      accounts: [""],
    },
    neonEVMtestnet: {
      url: "https://proxy.devnet.neonlabs.org/solana",
      accounts: [""],
    },
    basetestnet: {
      url: "https://rpc.ankr.com/base_goerli/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
,
      accounts: [""],
    },
    arbitrumtestnet: {
      url: "https://sepolia-rollup.arbitrum.io/rpc"
,
      accounts: [""],
    },
    lineatestnet: {
      url: "https://rpc.goerli.linea.build"
,
      accounts: [""],
    },
    zkSynctestnet: {
      url: "https://testnet.era.zksync.dev"
,
      accounts: [""],
    },
    mantletestnet: {
      url: "https://rpc.testnet.mantle.xyz"
,
      accounts: [""],
    },
    celotestnet: {
      url: "https://alfajores-forno.celo-testnet.org"
,
      accounts: [""],
    },
  },
};