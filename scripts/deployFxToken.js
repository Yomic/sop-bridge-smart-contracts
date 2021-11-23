require('dotenv').config()
const config = require('../config/config.json')
const hre = require('hardhat')

async function main () {
  const ERC20 = await hre.ethers.getContractFactory('FxERC20')
  const erc20 = await ERC20.deploy()
  await erc20.deployTransaction.wait()
  console.log('FxERC20 deployed to:', erc20.address)
  console.log('npx hardhat verify --network mumbai', erc20.address)
 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
