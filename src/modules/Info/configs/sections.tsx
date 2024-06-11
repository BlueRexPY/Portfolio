import { SectionEnum } from '@app/context/selectedSection';
import { WelcomeSection } from '../ui/widgets/InfoSection/WelcomeSection';
import type { FC } from 'react';

type SectionsConfigType = {
  key: SectionEnum;
  displayName: string;
  component: FC<{ isHovered: boolean }>;
}[];

const sectionsConfig: SectionsConfigType = [
  {
    key: SectionEnum.welcome,
    displayName: 'Welcome',
    component: WelcomeSection,
  },
  {
    key: SectionEnum.aboutMe,
    displayName: 'About',
    component: () => <>About</>,
  },
  {
    key: SectionEnum.workExperience,
    displayName: 'Experience',
    component: () => <>Experience</>,
  },
  {
    key: SectionEnum.technicalSkills,
    displayName: 'Skills',
    component: () => <>Skills</>,
  },
];
export { sectionsConfig };
