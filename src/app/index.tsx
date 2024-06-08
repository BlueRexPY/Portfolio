import React from 'react';
import { Router } from './providers/router';
import { GlobalStyles } from './styles/globalStyles';

const App = () => (
  <>
    <GlobalStyles />
    <Router />
  </>
);

export { App };
