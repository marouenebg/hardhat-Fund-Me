const { deployments, network } = require("hardhat");
const {developmentChains, DECIMALS, INITIAL_ANSWER} = require ("../helper-hardhat-config")

module.exports.default = async ({getNameAccounts, deployments}) => {
const  {deploy, log} = deployments ;
const {deployer} = await getNameAccounts();

if (developmentChains.includes(network.name)) {
        log("Local network detected! deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            logs: true,
            args: [DECIMALS, INITIAL_ANSWER],
    })
        log ("Mocks deployed")
    }
}

module.exports.tags = ["all", "mocks"]