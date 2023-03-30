import CPK, {EthersAdapter} from 'contract-proxy-kit';
import {ethers, Wallet} from 'ethers';
import {useLayoutEffect, useState} from 'preact/hooks';

const createProxySafe = async (signer: Wallet) => {
    const ethLibAdapter = new EthersAdapter({ethers, signer});
    return CPK.create({ethLibAdapter: ethLibAdapter});
};

export enum Status {
    Idle,
    Loading,
    Success,
    Error,
}

export const useSafeProxy = (signer: Wallet) => {
    const [proxy, setProxy] = useState<CPK | null>(null);
    const [status, setStatus] = useState<{ status: Status; error?: Error }>({status: Status.Idle});

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

    return {proxy, status};
};
