import React from "react";
import { Router } from "./providers/router";
import { GlobalStyles } from "./styles/globalStyles";
import { InitialAnimationContextProvider } from "./providers/initialAnimation";

const App = () => (
  <InitialAnimationContextProvider>
    <GlobalStyles />
    <Router />
  </InitialAnimationContextProvider>
);

export { App };
