import { AnimatedText } from "@ui/Text";

type Props = {
  isHovered: boolean;
};

const ExperienceSection = ({ isHovered }: Props) => {
  return (
    <>
      <AnimatedText isHovered={isHovered} delay={0} bullet>
        Setting up and leading full stack projects from idea stage to production
      </AnimatedText>
      <AnimatedText isHovered={isHovered} delay={0.1} bullet>
        Work Experience in a High Growth AI Startup reporting directly to the CE
        with a hybrid workflow
      </AnimatedText>
      <AnimatedText isHovered={isHovered} delay={0.2} bullet>
        Responsible for creating MVPs in a fast-paced env with strict deadlines
        to be pitched to potential investors
      </AnimatedText>
      <AnimatedText isHovered={isHovered} delay={0.3} bullet>
        Collaborated in a cross-functional team of BE, FE, and ML engineers
      </AnimatedText>
      <AnimatedText isHovered={isHovered} delay={0.4} bullet>
        Proficiency in crafting high-fidelity UI mockups (Figma)
      </AnimatedText>
      <AnimatedText isHovered={isHovered} delay={0.5} bullet>
        Excellent experience with JS, TS, React, Next.js and Node.js, Nest.js
      </AnimatedText>
    </>
  );
};

export { ExperienceSection };
