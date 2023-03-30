import 'libs/polyfills';
import './assets/fonts.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { GlobalStyle } from './constants/style';
import {usePriceQuotesTrigger} from "./store /use-price-quotes-store";
import { YaspRouter } from './components/router';




const TriggerHooks: React.FC = () => {
    usePriceQuotesTrigger()
    return null
}


const Popup: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <YaspRouter />
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
