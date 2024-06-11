import { createContext } from 'react';
import { SectionEnum } from './section';

type SelectedSectionContextType = {
  section: SectionEnum;
  setSection: (value: SectionEnum) => void;
};

const SelectedSectionContext = createContext<SelectedSectionContextType>({
  section: SectionEnum.welcome,
  setSection: () => {},
});

export { SelectedSectionContext };
