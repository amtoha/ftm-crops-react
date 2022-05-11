const chains = {
  fantom: {},
  fantomTestNetwork: {
    chainId: 4002,
    chainName: 'Fantom testnet',
    nativeCurrency: {
      name: 'FTM',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.testnet.fantom.network/'],
  },
}

export const defaultChain = chains.fantomTestNetwork
