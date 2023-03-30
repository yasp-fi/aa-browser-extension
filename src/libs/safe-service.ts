import { ethers, Wallet } from 'ethers';
import SafeServiceClient from '@safe-global/safe-service-client';
import EthersAdapter from '@safe-global/safe-ethers-lib';
import CPK from 'contract-proxy-kit';
import { CoinProperties } from 'src/constants/enabled-assets-temporary';

export type TokenBalance = CoinProperties & {
  amount: string;
  amountUSD: string;
  price: string;
  amountUnit: string;
};

export const getSafeUSDBalance = async (safe: CPK, signer: Wallet): Promise<TokenBalance[]> => {
  if (!safe.address) {
    return [];
  }
  const safeAddress = safe.address;
  const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: signer });

  const safeService = new SafeServiceClient({
    txServiceUrl: 'https://safe-transaction-goerli.safe.global',
    ethAdapter,
  });

  const balances = await safeService.getUsdBalances(safeAddress).catch(() => []);
  return balances.map(balance => {
    return {
      amount: balance.ethValue,
      amountUnit: balance.balance,
      amountUSD: balance.fiatBalance,
      price: balance.fiatConversion,

      onChainAddress: balance.tokenAddress,
      symbol: balance.token?.symbol || '',
      name: balance.token?.name || '',
      decimals: balance.token?.decimals || 18,
      imageSlug: balance.token?.logoUri || '',
      description: ''
    };
  }) as TokenBalance[];
};
