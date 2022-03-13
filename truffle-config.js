module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  contracts_build_directory: "./vukawallet/src/abis/",
  compilers: {
    solc: {
      version: "0.5.16",
      settings: {
        optimizer: {
          enabled: false,
          runs: 1000,
        },
      },
    },
  },
};
