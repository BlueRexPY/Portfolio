import { useInitialAnimation } from '@app/context/initialAnimation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.p`
  color: var(--secondary-color);
  font: var(--font-l);
  width: 100%;
  white-space: nowrap;
  height: var(--font-line-height-xl);
  max-height: var(--font-line-height-xl);
  overflow: hidden;
  position: relative;
  box-sizing: content-box;
`;

const Token = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;

type Props = {
  children: string;
  delay?: number;
  isHovered: boolean;
};

const AnimatedText = ({ isHovered, children, delay = 0 }: Props) => {
  const { isOver: isInitialAnimationOver } = useInitialAnimation();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <Container>
      {children.split(' ').map((word, index) => (
        <Token
          animate={{
            y: isInitialAnimationOver ? 0 : 40,
            opacity: isHovered ? 1 : 0.5,
          }}
          initial={{ y: 40, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            delay: initialLoad ? index * 0.01 + delay : 0,
          }}>
          {word}{' '}
        </Token>
      ))}
    </Container>
  );
};

export { AnimatedText };
