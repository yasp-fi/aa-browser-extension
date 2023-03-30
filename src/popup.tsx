import 'libs/polyfills';
import './assets/fonts.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Route, Router, Routes } from 'react-router';
import { defaultTheme } from './themes/default';
import { GlobalStyle } from './constants/style';
import {
  ReceiveCoinListScreen,
  OnboardingScreen,
  OverviewScreen,
  SendScreen,
  StartScreen,
} from './screens';
import { hashHistory } from './constants/hash-history';

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router location={'/start'} navigator={hashHistory}>
        <Routes>
          <Route path={'/onboarding'} Component={OnboardingScreen} />

          <Route path={'/start'} Component={StartScreen} />

          <Route path={'/send'} Component={SendScreen} />

          <Route path={'/coin-list'} Component={ReceiveCoinListScreen} />

          <Route path={'/'} Component={OverviewScreen} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
