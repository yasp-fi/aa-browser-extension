import { CHAIN_NAMESPACES, EVM_ADAPTERS, SafeEventEmitterProvider } from '@web3Auth/base';
import { Web3AuthNoModal } from '@web3auth/no-modal';
import { useEffect, useState } from 'react';
import { BrowserProvider, Wallet } from 'ethers';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';

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

const buildWeb3Auth = () => {
  const auth = new Web3AuthNoModal({
    clientId,
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: '0x5',
      rpcTarget: 'https://rpc.ankr.com/eth_goerli',
    },
    web3AuthNetwork: 'testnet',
  });

  const openloginAdapter = new OpenloginAdapter();
  auth.configureAdapter(openloginAdapter);
  return auth;
};

export enum AuthStatus {
  Loading,
  NotConnected,
  Connected
}

export const useWeb3Auth = () => {
  const [web3Auth, setWeb3Auth] = useState<Web3AuthNoModal | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.Loading);

  useEffect(() => {
    const initWeb3Auth = async (): Promise<void> => {
      const auth = buildWeb3Auth();
      setWeb3Auth(auth);
      await auth.init();

      if (auth.provider) {
        setProvider(auth.provider);
        setStatus(AuthStatus.Connected);
      } else {
        setStatus(AuthStatus.NotConnected);
      }
    };

    initWeb3Auth().catch(e => console.error(e));
  }, []);

  useEffect(() => {
    const initWallet = async () => {
      const privateKey = await provider!.request<string>({
        method: 'eth_private_key',
      });

      const browserProvider = new BrowserProvider(provider!);
      setWallet(new Wallet(privateKey!).connect(browserProvider));
    };

    if (provider) {
      initWallet().catch(e => console.error(e));
    }
  }, [provider]);

  const login = async (loginProvider: LoginProviders) => {
    if (!web3Auth) {
      throw new Error('Auth kit is not initialized');
    }
    setStatus(AuthStatus.Loading);

    if (web3Auth.provider) {
      await logout();
    }
    const authProvider = await web3Auth.connectTo(EVM_ADAPTERS.OPENLOGIN, {
      loginProvider: loginProvider,
    });

    setProvider(authProvider);
    setStatus(AuthStatus.Connected);
  };

  const logout = async () => {
    if (!web3Auth) {
      throw new Error('Auth kit is not initialized');
    }
    await web3Auth.logout();
    setProvider(null);
    setStatus(AuthStatus.NotConnected);
  };

  return { login, logout, wallet, status, provider };
};
