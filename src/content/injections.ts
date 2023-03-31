import { YaspSafeProvider } from '../libs/provider';
import { inject } from '../utils/inject';
import { GOERLI_RPC_URL } from '../constants/urls';
import Web3 from 'web3';

export const ethereumProvider = new YaspSafeProvider({
  rpcUrl: GOERLI_RPC_URL,
});

function performProviderInject(provider: any) {
  try {
    if (window) {
      inject(window, 'ethereum', provider);
      inject(window, 'web3', new Web3(provider));
    }
    console.info('hi!')
  } catch (error) {
    console.error('failed to inject');
  }
}

performProviderInject(ethereumProvider);

