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


const router = createMemoryRouter(
    createRoutesFromElements(
        <React.Fragment>
          <Route path={'/onboarding'} Component={OnboardingScreen} />

          <Route path={'/start'} Component={StartScreen} />

          <Route path={'/send'} Component={SendScreen} />

          <Route path={'/coin-list'} Component={ReceiveCoinListScreen} />

          <Route path={'/'} Component={OverviewScreen} />
        </React.Fragment>
    )
);



const Popup = () => {
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
