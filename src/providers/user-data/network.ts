export default {
  networks: {
    mainnet: {
      bip32: {
        private: 46089520,
        public: 46090600,
      },
      name: 'mainnet',
      nethash: 'bd08b094c9b07b4a84f5e840f11814b3b5244820c4a7f3528ab0d8dc5ebe5b8f',
      token: 'DID',
      symbol: 'D',
      version: 30,
      explorer: 'http://explorer.didcoin.com',
      wif: 54,
      p2pPort: 4001,
      apiPort: 4003,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: '198.13.38.36',
        port: 4003,
      },
      peers: [
        '198.13.38.36:4003',
        '45.77.19.101:4003',
        '139.180.202.165:4003',
        '45.63.127.28:4003',
        '45.77.23.224:4003',
        '45.32.28.153:4003',
        '45.76.206.108:4003',
        '45.76.102.49:4003',
        '45.77.19.54:4003',
        '45.76.49.89:4003',
        '207.148.88.42:4003',
        '167.179.117.40:4003',
        '139.180.197.36:4003',
        '167.179.100.199:4003',
        '207.148.110.238:4003',
        '167.179.97.235:4003',
        '202.182.102.208:4003',
        '167.179.97.217:4003',
        '45.32.24.242:4003',
        '167.179.116.79:4003',
        '167.179.118.104:4003',
      ],
    },
    devnet: {
      bip32: {
        public: 46090600,
        private: 46089520,
      },
      name: 'devnet',
      nethash: '5bd3b752f6fb50c142470337d9677a5cf7e244970d3a9f15e6e87a6b53616d7a',
      token: 'DID',
      symbol: 'D',
      version: 30,
      explorer: 'https://dexplorer.didcoin.com',
      wif: 75,
      p2pPort: 4002,
      apiPort: 4003,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: '198.13.38.36',
        port: 4003,
      },
      peers: [
        '198.13.38.36:4003',
      ],
    },
  },
  blockchain: {
    interval: 8,
    delegates: 53,
    date: new Date(Date.UTC(2019, 11, 22, 1, 27, 13, 336)),
  },
};
//# sourceMappingURL=index.js.map