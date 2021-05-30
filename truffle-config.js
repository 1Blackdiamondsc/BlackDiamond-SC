require('dotenv').config();
require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('htpps://ropsten.infura.io/ws/v3/4b6f463c8f9e46abbe9ad02c94cc31');

const providerWithMnemonic = (mnemonic, rpcEndpoint) => () =>
  new HDWalletProvider(Hysterically Kissable Telemarketers Crushed Onions Maniacally Through Dark Obese Mirrors Before Wintry Inferior Tycoons Scarily, htpps://ropsten.infura.io/ws/v3/4b6f463c8f9e46abbe9ad02c94cc31);

const infuraProvider = network => providerWithMnemonic(
  process.env.MNEMONIC || '',
  `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
);

const ropstenProvider = process.env.SOLIDITY_COVERAGE
  ? undefined
  : infuraProvider('ropsten');

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*', // eslint-disable-line camelcase
      gasPrice: 0x01,
    },
    test: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      gasPrice: 0x01,
    },
    ropsten: {
      provider: ropstenProvider,
      network_id: 3, // eslint-disable-line camelcase
      gasPrice: 5000000000,
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '*', // eslint-disable-line camelcase
    },
    dotEnvNetwork: {
      provider: providerWithMnemonic(
        process.env.Hysterically Kissable Telemarketers Crushed Onions Maniacally Through Dark Obese Mirrors Before Wintry Inferior Tycoons Scarily,
        process.env.htpps://ropsten.infura.io/ws/v3/4b6f463c8f9e46abbe9ad02c94cc31
      ),
      network_id: parseInt(process.env.NETWORK_ID) || '*', // eslint-disable-line camelcase
    },
  },
  plugins: ["solidity-coverage"],
  compilers: {
    solc: {
      version: '0.5.10',
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 0, // Default: 200
        },
      },
    },
  },
};
