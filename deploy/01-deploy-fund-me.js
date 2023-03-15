const { deployments, network } = require("hardhat");

function deployFunc () {
console.log("testing this");
}

module.exports.default = deployFunc 


//module.exports.default = async (hre) 
//getting this two variables out of hre
//hre.getNameAccounts
//hre.deployments
module.exports.default = async ({getNameAccounts, deployments}) => {}
const  {deploy, log} = deployments ;
const {deployer} = await getNameAccounts();
const chainId = network.config.chainId;