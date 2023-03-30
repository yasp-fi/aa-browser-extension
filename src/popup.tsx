import 'libs/polyfills';
import './assets/fonts.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {h} from 'preact';
import {Route, Router} from 'preact-router';
import {defaultTheme} from './themes/default';
import {GlobalStyle} from './constants/style';
import {CoinListScreen, OnboardingScreen, OverviewScreen, SendScreen, StartScreen} from './screens';
import {hashHistory} from './constants/hash-history';


const Popup = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            {/*// @ts-ignore*/}
            <Router history={hashHistory}>
                <Route
                    path={'/onboarding'}
                    component={OnboardingScreen}
                />

                <Route
                    path={'/start'}
                    component={StartScreen}
                />

                <Route
                    path={'/send'}
                    component={SendScreen}
                />


                <Route path={'/coin-list'} component={CoinListScreen}/>

                <Route
                    path={'/'}
                    component={OverviewScreen}
                />
            </Router>
        </ThemeProvider>
    );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup/>, root);
