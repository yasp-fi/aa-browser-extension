import { CHAIN_NAMESPACES, EVM_ADAPTERS, SafeEventEmitterProvider } from '@web3Auth/base';
import { SafeAuthKit, SafeAuthProviderType } from '@safe-global/auth-kit';
import { useEffect, useState } from 'react';
import Safe from '@safe-global/safe-core-sdk';
import { BrowserProvider } from 'ethers';

export enum LoginProviders {
  Google = 'google',
  Facebook = 'facebook',
  Twitter = 'twitter',
  Discord = 'discord',
}

// const { WEB3_AUTH_CLIENT_ID: clientId = argumentIsMissing('WEB3_AUTH_CLIENT_ID') } = process.env;
const clientId =
  'BL_dlZ28ZDs4Gmt-8VpEhafnlkbhtFOfnsdQXpZOjyInEhjwRVfeZnOCUvyvQEz88c26tmx8nI2byncb026W1qc';

const OPTIONS = {
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x5',
    rpcTarget: 'https://rpc.ankr.com/eth_goerli',
    displayName: 'Ethereum Goerli Testnet',
    blockExplorer: 'https://goerli.etherscan.io',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  },
  web3AuthNetwork: 'testnet',
  clientId,
  enableLogging: false,
};

export const useWeb3Auth = () => {
  const [authKit, setAuthKit] = useState<SafeAuthKit | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

  useEffect(() => {
    const initWeb3Auth = async (): Promise<void> => {
      const authKit_ = await SafeAuthKit.init(SafeAuthProviderType.Web3Auth, {
        chainId: '0x5',
        authProviderConfig: {
          clientId, // Add your client id. Get it from the Web3Auth dashboard
          rpcTarget: 'https://rpc.ankr.com/eth_goerli', // Add your RPC e.g. https://goerli.infura.io/v3/<your project id>
          network: 'testnet', // The network to use for the Web3Auth modal. Use 'testnet' while developing and 'mainnet' for production use
          theme: 'dark', // The theme to use for the Web3Auth modal
        },
      });

      if (!authKit_) {
      throw new Error('13123')
      }
        setAuthKit(authKit_);
    };

    initWeb3Auth().catch(e => console.error(e));
  }, []);

  const login = async () => {
    if (!authKit) {
      throw new Error("Auth kit is not initialized")
    }
    return authKit.signIn();
  }


  const logout = async () => {
    if (!authKit) {
      throw new Error("Auth kit is not initialized")
    }
    return authKit.signOut();
  }

  return { authKit, login, logout, provider };
};
