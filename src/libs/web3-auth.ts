import {Web3AuthNoModal, Web3AuthNoModalOptions} from '@web3auth/no-modal';
import { CHAIN_NAMESPACES } from '@web3auth/base'
import { argumentIsMissing } from '../utils/argument-is-missing';

const {
    WEB3_AUTH_CLIENT_ID: clientId = argumentIsMissing('WEB3_AUTH_CLIENT_ID'),
} = process.env

const OPTIONS: Web3AuthNoModalOptions = {
    chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: '0x5',
        rpcTarget: "https://rpc.ankr.com/eth",
        displayName: "Ethereum Goerli Testnet",
        blockExplorer: "https://goerli.etherscan.io",
        ticker: "ETH",
        tickerName: "Ethereum",
    },
    clientId: clientId!,
}

export const web3Auth = new Web3AuthNoModal(OPTIONS);
