import { useInitialAnimation } from '@app/context/initialAnimation';
import { skillsConfig } from '@modules/Info/configs/skills';
import { AnimatedText } from '@ui/Text';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  gap: var(--spacing-s);
`;

const ImgContainer = styled(motion.div)`
  overflow: hidden;
  position: relative;
  display: inline-block;
  box-sizing: content-box;
  height: var(--font-line-height-l);
  max-height: var(--font-line-height-l);

  @media (max-width: 768px) {
    height: var(--font-line-height-s);
    max-height: var(--font-line-height-s);
  }
`;

const Icon = styled(motion.img)`
  border-radius: var(--border-radius-xs);
  height: var(--font-line-height-l);
  display: inline-block;
  white-space: pre;

  @media (max-width: 768px) {
    height: var(--font-line-height-xs);
  }
`;

type Props = {
  isHovered: boolean;
};

const SkillsSection = ({ isHovered }: Props) => {
  const { isOver: isInitialAnimationOver } = useInitialAnimation();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <Container>
      {skillsConfig.map((src, index) => (
        <ImgContainer key={src}>
          <Icon
            src={src}
            animate={{
              y: isInitialAnimationOver ? 0 : 40,
              opacity: isHovered ? 1 : 0.5,
            }}
            initial={{ y: 40, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
              delay: initialLoad ? index * 0.005 : 0,
            }}
          />
        </ImgContainer>
      ))}
    </Container>
  );
};

export { SkillsSection };
