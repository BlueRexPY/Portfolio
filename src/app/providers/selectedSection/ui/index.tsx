import { InitialAnimationContext } from '@app/context/initialAnimation/context';
import { SectionEnum, SelectedSectionContext } from '@app/context/selectedSection';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const SelectedSectionContextProvider = ({ children }: Props) => {
  const [section, setSection] = useState(SectionEnum.welcome);

  return <SelectedSectionContext.Provider value={{ section, setSection }}>{children}</SelectedSectionContext.Provider>;
};

export { SelectedSectionContextProvider };
