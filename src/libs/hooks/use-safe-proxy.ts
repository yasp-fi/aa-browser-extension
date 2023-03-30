import CPK, { EthersAdapter } from 'contract-proxy-kit';
import { ethers, JsonRpcSigner, Wallet } from 'ethers';
import { useState, useLayoutEffect } from 'react';
import { Status } from '../../utils/status';

const createProxySafe = async (signer: JsonRpcSigner | Wallet) => {
  const ethLibAdapter = new EthersAdapter({ ethers, signer });
  return CPK.create({ ethLibAdapter: ethLibAdapter });
};

export const useSafeProxy = (signer: JsonRpcSigner | Wallet) => {
  const [proxy, setProxy] = useState<CPK | null>(null);
  const [status, setStatus] = useState<{ status: Status; error?: Error }>({ status: Status.Idle });

  const onSuccess = (cpk: CPK) => {
    setStatus({
      status: Status.Success,
    });
    setProxy(cpk);
  };

  const onError = (err: Error) => {
    setStatus({
      status: Status.Error,
      error: err,
    });
  };

  const onLoading = () => {
    setStatus({
      status: Status.Loading,
    });
  };

  useLayoutEffect(() => {
    onLoading();

    createProxySafe(signer)
    .then(onSuccess)
    .catch(onError);
  }, [signer]);

  return {proxy, status}
};
