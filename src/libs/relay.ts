import {GelatoRelayAdapter, RelayTransaction} from '@safe-global/relay-kit';
import {MetaTransactionData, OperationType} from '@safe-global/safe-core-sdk-types';
import {BigNumber} from '@ethersproject/bignumber';
import {argumentIsMissing} from 'src/utils/argument-is-missing';
import Safe from '@safe-global/safe-core-sdk';

const {
    GELATO_RELAY_API_KEY: gelatoApiKey = argumentIsMissing('GELATO_RELAY_API_KEY'),
} = process.env;

export const relayAdapter = new GelatoRelayAdapter(gelatoApiKey!);

// ref: https://docs.safe.global/learn/safe-core/safe-core-account-abstraction-sdk/relay-kit
export const relayTransfer = async (
    destination: string,
    amount: string,
    safe: Safe,
    options: {
        isSponsored: boolean;
        chainId: number;
    } = {isSponsored: false, chainId: 0x5}
) => {
    const safeTransactionData: MetaTransactionData = {
        to: destination,
        data: '0x',
        value: amount,
        operation: OperationType.Call,
    };

    const safeTransaction = await safe.createTransaction({safeTransactionData});

    const signedSafeTx = await safe.signTransaction(safeTransaction);

    const encodedTx = safe
        .getContractManager()
        .safeContract.encode('execTransaction', [
            signedSafeTx.data.to,
            signedSafeTx.data.value,
            signedSafeTx.data.data,
            signedSafeTx.data.operation,
            signedSafeTx.data.safeTxGas,
            signedSafeTx.data.baseGas,
            signedSafeTx.data.gasPrice,
            signedSafeTx.data.gasToken,
            signedSafeTx.data.refundReceiver,
            signedSafeTx.encodedSignatures(),
        ]);

    const relayTransaction: RelayTransaction = {
        target: safe.getAddress(),
        encodedTransaction: encodedTx,
        chainId: options.chainId,
        options: {
            gasLimit: BigNumber.from('10000'),
            isSponsored: options.isSponsored,
        },
    };

    return relayAdapter.relayTransaction(relayTransaction);
};
