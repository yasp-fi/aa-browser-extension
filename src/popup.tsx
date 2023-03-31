import 'libs/polyfills';
import './assets/fonts.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { GlobalStyle } from './constants/style';
import {
  ReceiveCoinListScreen,
  OnboardingScreen,
  OverviewScreen,
  SendScreen,
  StartScreen,
} from './screens';
import { createMemoryRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { usePriceQuotesTrigger } from "./store /use-price-quotes-store";
import {ConfirmTransactionScreen} from "./screens/confirm-transaction";


const router = createMemoryRouter(
  createRoutesFromElements(
    <React.Fragment>
      {/*<Route path={'/'} Component={() => <ConfirmTransactionScreen*/}
      {/*    assetAddress={'0x45AC379F019E48ca5dAC02E54F406F99F5088099'}*/}
      {/*    transactionAmount={'10.6453'}*/}
      {/*    transactionFee={'0.001'}*/}
      {/*    userAddress={'0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990'} />} />*/}

      <Route path={'/start'} Component={StartScreen} />

      <Route path={'/send'} Component={SendScreen} />

      <Route path={'/receive'} Component={ReceiveCoinListScreen} />

      <Route path={'/overview'} Component={OverviewScreen} />
    </React.Fragment>
  )
);

const TriggerHooks: React.FC = () => {
    usePriceQuotesTrigger()
    return null
}


const Popup: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
