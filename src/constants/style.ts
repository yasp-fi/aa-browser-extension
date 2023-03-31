import { createGlobalStyle } from 'styled-components';
import React from 'react';

export const GlobalStyle = createGlobalStyle`
  body {
    overscroll-behavior-y: none;
    //scroll-behavior: smooth;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.palette.background };
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: transparent;
  } 
`;
