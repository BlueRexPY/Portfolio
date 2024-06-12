import { SectionEnum } from "@app/context/selectedSection";
import { WelcomeSection } from "../ui/widgets/InfoSection/WelcomeSection";
import type { FC } from "react";
import { ExperienceSection } from "../ui/widgets/InfoSection/ExperienceSection";
import { SkillsSection } from "../ui/widgets/InfoSection/SkillsSection";

type SectionsConfigType = {
  key: SectionEnum;
  displayName: string;
  component: FC<{ isHovered: boolean }>;
}[];

const sectionsConfig: SectionsConfigType = [
  {
    key: SectionEnum.welcome,
    displayName: "Welcome",
    component: WelcomeSection,
  },
  {
    key: SectionEnum.workExperience,
    displayName: "Experience",
    component: ExperienceSection,
  },
  {
    key: SectionEnum.technicalSkills,
    displayName: "skills",
    component: SkillsSection,
  },
];
export { sectionsConfig };
