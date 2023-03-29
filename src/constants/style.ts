import { createGlobalStyle } from 'styled-components';
import React from 'react';


export const GlobalStyle = createGlobalStyle`
    body {
      scroll-behavior: smooth;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
    }
` as React.FC;
