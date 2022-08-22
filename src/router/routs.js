import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";
import { HOME_ROUTE, PORTFOLIO_ROUTE } from "../utils/consts";

export const publicRouts = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: PORTFOLIO_ROUTE,
    Component: PortfolioPage,
  },
];
