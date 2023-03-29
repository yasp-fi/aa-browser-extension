import 'libs/polyfills';
import './assets/fonts.css';

import React, { useState, useEffect } from 'react';
import { Router, Route, BaseLocationHook } from "wouter-preact";
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { h } from 'preact';

import {defaultTheme} from './themes/default';
import {GlobalStyle} from './constants/style';
import {OnboardingScreen, OverviewScreen, StartScreen} from './screens';

const currentLocation = () => {
    return window.location.hash.replace(/^#/, "") || "/";
};

const navigate = (to: string) => (window.location.hash = to);

const useHashLocation: BaseLocationHook = () => {
    const [loc, setLoc] = useState(currentLocation());

    useEffect(() => {
        // this function is called whenever the hash changes
        const handler = () => setLoc(currentLocation());

        // subscribe to hash changes
        window.addEventListener("hashchange", handler);
        return () => window.removeEventListener("hashchange", handler);
    }, []);


    return [loc, navigate];
};

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router hook={useHashLocation}>
            <Route
                path={'/onboarding'}
                component={OnboardingScreen}
            />

            <Route
                path={'/'}
                component={StartScreen}
            />

            <Route
                path={'/overview'}
                component={OverviewScreen}
            />
        </Router>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
