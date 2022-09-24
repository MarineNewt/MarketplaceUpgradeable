// migrations/2_deploy_box.js
const Marketplace = artifacts.require('Marketplace');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(Marketplace, [], { deployer,});
};