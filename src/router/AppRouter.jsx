import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { publicRouts } from "./routs";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        {publicRouts.map(({ path, Component }, key) => (
          <Route path={path} key={key} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
