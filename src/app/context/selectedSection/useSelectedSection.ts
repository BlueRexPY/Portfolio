import { useContext } from 'react';
import { SelectedSectionContext } from './context';

const useSelectedSection = () => {
  return useContext(SelectedSectionContext);
};

export { useSelectedSection };
