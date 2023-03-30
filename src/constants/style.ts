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

    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
      background-color: transparent;
    }
  }

  a {
    text-decoration: none;
  }
`;
