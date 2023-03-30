import { ethers, Wallet } from 'ethers';
import SafeServiceClient from '@safe-global/safe-service-client';
import EthersAdapter from '@safe-global/safe-ethers-lib';
import CPK from 'contract-proxy-kit';

export const getSafeUSDBalance = async (safe: CPK, signer: Wallet) => {
  if (!safe.address) {
    return [];
  }
  const safeAddress = safe.address;
  const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: signer });

  const safeService = new SafeServiceClient({
    txServiceUrl: 'https://safe-transaction-goerli.safe.global',
    ethAdapter,
  });

  return safeService.getUsdBalances(safeAddress);
};


export const getSafeBalance = async (safe: CPK, signer: Wallet) => {
  if (!safe.address) {
    return [];
  }
  const safeAddress = safe.address;
  const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: signer });

  const safeService = new SafeServiceClient({
    txServiceUrl: 'https://safe-transaction-goerli.safe.global',
    ethAdapter,
  });

  return safeService.getBalances(safeAddress);
};
