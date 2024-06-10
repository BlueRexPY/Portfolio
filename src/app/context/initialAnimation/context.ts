import { createContext } from "react";

type InitialAnimationContextType = {
  isOver: boolean;
  setIsOver: (value: boolean) => void;
};

const InitialAnimationContext = createContext<InitialAnimationContextType>({
  isOver: false,
  setIsOver: () => {},
});

export { InitialAnimationContext };
