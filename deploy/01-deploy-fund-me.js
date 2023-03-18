const { deployments, network } = require("hardhat");
const {networkConfig } = require("../helper-hardhat-config")

//module.exports.default = async (hre) 
//getting this two variables out of hre
//hre.getNameAccounts
//hre.deployments
module.exports.default = async ({getNameAccounts, deployments}) => {
const  {deploy, log} = deployments ;
const {deployer} = await getNameAccounts();
const chainId = network.config.chainId;

const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
//if the contract does not exist we deploy a minimal version of it for our local testing

const fundMe = await deploy("FundMe", {
        from: deployer,
        args:  [],// price feed address
        logs: true, 
    })

}