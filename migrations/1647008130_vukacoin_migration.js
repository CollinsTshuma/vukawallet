const VukaCoin = artifacts.require("VukaCoin");

module.exports = function (deployer) {
  deployer.deploy(VukaCoin);
};
