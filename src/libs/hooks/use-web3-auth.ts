import { Web3AuthNoModal } from '@web3auth/no-modal';
import { useEffect, useState } from 'react';
import { ethers, Wallet } from 'ethers';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import CPK, { EthersAdapter } from 'contract-proxy-kit';
import { CHAIN_NAMESPACES, EVM_ADAPTERS } from '@web3auth/base';
import { GOERLI_RPC_URL } from '../../constants/urls';
import { ethereumProvider } from '../../content/injections';

export enum LoginProviders {
  Google = 'google',
  Facebook = 'facebook',
  Twitter = 'twitter',
  Discord = 'discord',
}

// const { WEB3_AUTH_CLIENT_ID: clientId = argumentIsMissing('WEB3_AUTH_CLIENT_ID') } = process.env;
const clientId =
  'BL_dlZ28ZDs4Gmt-8VpEhafnlkbhtFOfnsdQXpZOjyInEhjwRVfeZnOCUvyvQEz88c26tmx8nI2byncb026W1qc';

const buildWeb3Auth = () => {
  const auth = new Web3AuthNoModal({
    clientId,
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: '0x5',
      rpcTarget: GOERLI_RPC_URL,
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
  Connected,
}

export const useWeb3Auth = () => {
  const [web3Auth, setWeb3Auth] = useState<Web3AuthNoModal | null>(null);
  const [provider, setProvider] = useState<any | null>(null);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [safe, setSafe] = useState<CPK | null>(null);
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.Loading);

  const initWallet = async () => {
    if (!provider) return;
    
    const privateKey = await provider.request({
      method: 'eth_private_key',
    });

    const browserProvider = new ethers.providers.Web3Provider(provider);
    const ownerWallet = new Wallet(privateKey!).connect(browserProvider);
    setWallet(ownerWallet);

    const ethLibAdapter = new EthersAdapter({ ethers, signer: ownerWallet });
    const proxySafe = await CPK.create({ ethLibAdapter: ethLibAdapter });
    
    setSafe(proxySafe);
  };

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

  useEffect(() => {
    initWeb3Auth().catch(e => console.error(e));
  }, []);

  useEffect(() => {
    if (provider) {
      initWallet().catch(e => console.error(e));
    }
  }, [provider]);

  return { login, logout, wallet, safe, status, provider };
};
