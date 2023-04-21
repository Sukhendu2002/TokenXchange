require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const QUICKNODE_HTTP_URL_AVALUNCH = process.env.QUICKNODE_HTTP_URL_AVALUNCH;
const PRIVATE_KEY_AVALUNCH = process.env.PRIVATE_KEY_AVALUNCH;
const QUICKNODE_HTTP_URL_MUMBAI = process.env.QUICKNODE_HTTP_URL_MUMBAI;
const PRIVATE_KEY_MUMBAI = process.env.PRIVATE_KEY_MUMBAI;

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
    avalunch: {
      url: QUICKNODE_HTTP_URL_AVALUNCH,
      accounts: [PRIVATE_KEY_AVALUNCH],
    },
    mumbai: {
      url: QUICKNODE_HTTP_URL_MUMBAI,
      accounts: [PRIVATE_KEY_MUMBAI],
    },
  },
};
