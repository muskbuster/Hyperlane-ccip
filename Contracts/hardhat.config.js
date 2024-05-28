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
          privateKey: "a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d",
          balance: "1000000000000000000000",
        },
      ],
    },
    inco: {
      url: "https://testnet.inco.org",
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/o4D6p25CnIxRBE9Ce1R6_gciUEpZbqw8",
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
    scrollSepolia: {
      url: "https://rpc.ankr.com/scroll_sepolia_testnet/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
    neonEVMtestnet: {
      url: "https://proxy.devnet.neonlabs.org/solana",
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
    basetestnet: {
      url: "https://rpc.ankr.com/base_goerli/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
,
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
    arbitrumtestnet: {
      url: "https://sepolia-rollup.arbitrum.io/rpc"
,
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
    lineatestnet: {
      url: "https://rpc.goerli.linea.build"
,
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
    zkSynctestnet: {
      url: "https://testnet.era.zksync.dev"
,
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
    mantletestnet: {
      url: "https://rpc.testnet.mantle.xyz"
,
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
    celotestnet: {
      url: "https://alfajores-forno.celo-testnet.org"
,
      accounts: ["a05cb6cdca3da9f489e95621880c6de13daef23ab6d42cf18e3fbbc7eef24a1d"],
    },
  },
};