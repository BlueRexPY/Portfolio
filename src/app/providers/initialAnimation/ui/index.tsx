import { InitialAnimationContext } from "@app/context/initialAnimation/context";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const InitialAnimationContextProvider = ({ children }: Props) => {
  const [isOver, setIsOver] = useState(true); // todo: change to false

  return (
    <InitialAnimationContext.Provider value={{ isOver, setIsOver }}>
      {children}
    </InitialAnimationContext.Provider>
  );
};

export { InitialAnimationContextProvider };
