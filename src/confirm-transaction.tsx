
import 'libs/polyfills';
import './assets/fonts.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { GlobalStyle } from './constants/style';

import { ConfirmTransactionScreen } from "./screens/confirm-transaction";


// WBTC
const MOCK_ASSET_ADDRESS = '0x45AC379F019E48ca5dAC02E54F406F99F5088099'
const MOCK_USER_ADDRESS = '0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990'
const MOCK_TRANSACTION_AMOUNT = '10.63543'
const MOCK_TRANSACTION_FEE = '0.001'


const ConfirmTransaction: React.FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <ConfirmTransactionScreen
                userAddress={MOCK_USER_ADDRESS}
                assetAddress={MOCK_ASSET_ADDRESS}
                transactionAmount={MOCK_TRANSACTION_AMOUNT}
                transactionFee={MOCK_TRANSACTION_FEE}
            />
        </ThemeProvider>
    )
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<ConfirmTransaction />, root)
