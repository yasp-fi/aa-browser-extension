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


const router = createMemoryRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path={'/'} Component={OnboardingScreen} />

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
