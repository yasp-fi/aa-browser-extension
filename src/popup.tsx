import 'libs/polyfills';
import './assets/fonts.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { h } from 'preact';
import {defaultTheme} from './themes/default';
import {GlobalStyle} from './constants/style';

import { OnboardingScreen } from './screens';

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <OnboardingScreen />
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
