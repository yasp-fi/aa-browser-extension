import YaspSafeProvider from '../libs/provider';
import { inject } from '../utils/inject';
import { GOERLI_RPC_URL } from '../constants/urls';

const ethereumProvider = YaspSafeProvider({
  rpcUrl: GOERLI_RPC_URL,
});

export function performProviderInject(provider: unknown) {
  try {
    if (window) {
      inject(window, 'ethereum', provider);
    }
  } catch (error) {
    console.error('failed to inject');
  }
}

performProviderInject(ethereumProvider);
