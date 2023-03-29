import { Web3AuthNoModal, Web3AuthNoModalOptions } from '@web3auth/no-modal';
import { CHAIN_NAMESPACES } from '@web3auth/base';
import { SafeAuthConfig, SafeAuthKit } from '@safe-global/auth-kit';
import { argumentIsMissing } from '../utils/argument-is-missing';
import Web3AuthAdapter from '@safe-global/auth-kit/dist/src/adapters/Web3AuthAdapter';
// import { Web3Provider } from '@ethersproject/providers';
// import { ethers } from 'ethers';
// import EthersAdapter from '@safe-global/safe-ethers-lib';
// import { SafeFactory } from '@safe-global/safe-core-sdk';

const { WEB3_AUTH_CLIENT_ID: clientId = argumentIsMissing('WEB3_AUTH_CLIENT_ID') } = process.env;

const OPTIONS: Web3AuthNoModalOptions = {
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x5',
    rpcTarget: 'https://rpc.ankr.com/eth',
    displayName: 'Ethereum Goerli Testnet',
    blockExplorer: 'https://goerli.etherscan.io',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  },
  clientId: clientId!,
};

const SAFE_AUTH_CONFIG: SafeAuthConfig = {
  chainId: '0x5',
  authProviderConfig: {
    rpcTarget: 'https://rpc.ankr.com/eth', // Add your RPC e.g. https://goerli.infura.io/v3/<your project id>
    clientId: clientId!, // Add your client id. Get it from the Web3Auth dashboard
    network: 'testnet', // The network to use for the Web3Auth modal. Use 'testnet' while developing and 'mainnet' for production use
    theme: 'dark', // The theme to use for the Web3Auth modal
  },
};

export const web3Auth = new Web3AuthNoModal(OPTIONS);

// ref: https://docs.safe.global/learn/safe-core/safe-core-account-abstraction-sdk/auth-kit
export const authKit = new SafeAuthKit(
  new Web3AuthAdapter(SAFE_AUTH_CONFIG.chainId, SAFE_AUTH_CONFIG.authProviderConfig),
  SAFE_AUTH_CONFIG
);

// export const getFactory = async () => {
//   const provider = authKit.getProvider();
//   if (!provider) {
//     throw new Error('Please auth');
//   }

//   const ethAdapter = new EthersAdapter({
//     ethers: ethers as any,
//     signerOrProvider: new Web3Provider(provider),
//   });

//   return SafeFactory.create({ ethAdapter: ethAdapter })
// };
