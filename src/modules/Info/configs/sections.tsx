import { SectionEnum } from '@app/context/selectedSection';

type SectionsConfigType = {
  key: SectionEnum;
  displayName: string;
  component: React.ReactNode;
}[];

const sectionsConfig: SectionsConfigType = [
  {
    key: SectionEnum.welcome,
    displayName: 'Welcome',
    component: <>Welcome</>,
  },
  {
    key: SectionEnum.aboutMe,
    displayName: 'About',
    component: <>About</>,
  },
  {
    key: SectionEnum.workExperience,
    displayName: 'Experience',
    component: <>Experience</>,
  },
  {
    key: SectionEnum.technicalSkills,
    displayName: 'Skills',
    component: <>Skills</>,
  },
];
export { sectionsConfig };
