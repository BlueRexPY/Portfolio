import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInitialAnimation } from '@app/context/initialAnimation';
import { useEffect, useMemo, useState } from 'react';
import { backgroundText } from '@modules/Demo/configs/backgroundText';

const Name = styled.h1`
  margin-top: 3.5rem;
  position: static;
  font: var(--font-xxxl);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  -webkit-text-stroke: 30px var(--bg-color);
  paint-order: stroke fill;
  width: 100%;
`;

const TextContainer = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  cursor: default;
`;

const TokenAnimatedContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  z-index: 10;
  color: var(--bg-color);
`;

const BottomText = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 100%;
`;

const TokenContainer = styled(motion.span)`
  overflow: hidden;
  position: relative;
  display: inline-block;
  text-align: center;
  box-sizing: content-box;
  height: 7rem;
  max-height: 7rem;
  white-space: nowrap;
  width: 100%;
  font: var(--font-size-xxxl) / 7rem var(--font-family-primary);
`;

const Token = styled(motion.span)`
  color: var(--accent-color);
  text-align: center;
  display: inline-block;
  white-space: pre;
  width: 100%;
`;

const textProps = {
  animate: {
    y: ['0%', '-100%'],
  },
  transition: {
    repeat: Number.POSITIVE_INFINITY,
    duration: 10,
    ease: 'linear',
  },
};

type Props = {
  isHovered: boolean;
};

const Content = ({ isHovered }: Props) => {
  const { isOver: isInitialAnimationOver } = useInitialAnimation();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  const textContainerProps = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: {
        opacity: isHovered ? 1 : 0.5,
      },
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
        delay: initialLoad ? 0.3 : 0,
      },
    }),
    [isHovered, initialLoad],
  );

  return (
    <>
      <Name>
        <TokenContainer>
          <Token
            animate={{
              y: isInitialAnimationOver ? 0 : 80,
              opacity: isHovered ? 1 : 0.5,
            }}
            initial={{ y: 80, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
              delay: initialLoad ? 0.1 : 0,
            }}>
            Ruslan
          </Token>
        </TokenContainer>
        <TokenContainer style={{ top: '-3.2rem' }}>
          <Token
            animate={{
              y: isInitialAnimationOver ? 0 : 80,
              opacity: isHovered ? 1 : 0.5,
            }}
            initial={{ y: 80, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
              delay: initialLoad ? 0.2 : 0,
            }}>
            Rystsov
          </Token>
        </TokenContainer>
      </Name>

      <TextContainer {...textContainerProps}>
        <TokenAnimatedContainer {...textProps}>
          <div>{backgroundText}</div>
          <BottomText>{backgroundText}</BottomText>
        </TokenAnimatedContainer>
      </TextContainer>
    </>
  );
};

export { Content };
