import React from 'react';
import { RouterProvider } from 'react-router';
import { createMemoryRouter, createRoutesFromElements, Route } from 'react-router-dom';
import {
  OnboardingScreen,
  OverviewScreen,
  ReceiveCoinListScreen,
  SendScreen,
  StartScreen,
} from '../screens';

export const router = createMemoryRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path={'/onboarding'} Component={OnboardingScreen} />

      <Route path={'/'} Component={StartScreen} />

      <Route path={'/send'} Component={SendScreen} />

      <Route path={'/coin-list'} Component={ReceiveCoinListScreen} />

      <Route path={'/overview'} Component={OverviewScreen} />
    </React.Fragment>
  )
);

export const YaspRouter = () => <RouterProvider router={router} />;
