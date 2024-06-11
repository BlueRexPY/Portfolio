import React from 'react';
import { Router } from './providers/router';
import { GlobalStyles } from './styles/globalStyles';
import { InitialAnimationContextProvider } from './providers/initialAnimation';
import { SelectedSectionContextProvider } from './providers/selectedSection';

const App = () => (
  <InitialAnimationContextProvider>
    <SelectedSectionContextProvider>
      <GlobalStyles />
      <Router />
    </SelectedSectionContextProvider>
  </InitialAnimationContextProvider>
);

export { App };
