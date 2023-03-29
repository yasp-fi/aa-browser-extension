import { createGlobalStyle } from 'styled-components';
import React from 'react';


export const GlobalStyle = createGlobalStyle`
    body {
      overscroll-behavior-y: none;
      overflow: auto;
      scroll-behavior: smooth;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      margin: 0;
      padding: 0;
      width: 350px;
    }

    a {
      text-decoration: none;
    }
` as React.FC;
