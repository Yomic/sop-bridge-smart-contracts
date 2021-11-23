require('dotenv').config()
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

let accounts = []

if (process.env.PRIVATE_KEY) {
  accounts = [`0x${process.env.PRIVATE_KEY}`, ...accounts]
}

module.exports = {
  solidity: {
    version: '0.8.7',
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999
      }
    }
  },
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC || 'https://main-light.eth.linkpool.io',
      accounts
    },
    goerli: {
      url: 'https://speedy-nodes-nyc.moralis.io/4a6cc15939827f0d3ad58ddf/eth/goerli',
      accounts
    },
    polygon: {
      url: process.env.POLYGON_RPC || 'https://polygon-rpc.com',
      accounts
    },
    mumbai: {
      url: 'https://speedy-nodes-nyc.moralis.io/4a6cc15939827f0d3ad58ddf/polygon/mumbai',
      accounts
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
}
