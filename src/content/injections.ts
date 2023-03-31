import { YaspSafeProvider } from '../libs/provider';
import { inject } from '../utils/inject';
import { GOERLI_RPC_URL } from '../constants/urls';
import Web3 from 'web3';
import { Wallet, ethers, providers } from 'ethers';
import CPK, { EthersAdapter } from 'contract-proxy-kit';

export const ethereumProvider = new YaspSafeProvider({
  rpcUrl: GOERLI_RPC_URL,
});

function performProviderInject(provider: YaspSafeProvider) {
  try {
    const safe = localStorage.getItem('safe');
    console.log({ safe });
    if (safe?.startsWith('0x')) {
      provider.setSafe(safe);
    }
    inject(window, 'ethereum', provider.engine);
    // inject(window, 'web3', new Web3(provider.engine));
  } catch (error) {
    console.error('failed to inject', error);
  }
}

performProviderInject(ethereumProvider);
