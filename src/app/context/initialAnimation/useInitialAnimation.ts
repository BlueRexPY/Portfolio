import { useContext, useState } from "react";
import { InitialAnimationContext } from "./context";

const useInitialAnimation = () => {
  return useContext(InitialAnimationContext);
};

export { useInitialAnimation };
