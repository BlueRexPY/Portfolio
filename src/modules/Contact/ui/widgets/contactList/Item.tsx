import { ArrowRightOutlined } from "@ant-design/icons";
import { useInitialAnimation } from "@app/context/initialAnimation";
import type { ContactItemConfigType as Props } from "@modules/Contact/configs";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: relative;
  width: calc(100vw / 3);
  border: 1px solid var(--paper-border-secondary-color);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  padding: var(--spacing-m);
  height: calc(100vh / 4);
  cursor: pointer;
  transition: border var(--timing-s) ease;
  overflow: hidden;

  &:hover {
    border: 1px solid var(--paper-border-color);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BackgroundCircle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--primary-color) 80%, transparent 100%),
    color-mix(in srgb, var(--primary-dark-color) 80%, transparent 100%)
  );
  filter: blur(50px);
  pointer-events: none;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-start;
  color: var(--secondary-color);
  width: 100%;
  white-space: nowrap;
  height: 50px;
  max-height: 50px;
  overflow: hidden;
`;

const Name = styled(motion.span)`
  font: var(--font-xl);
  overflow: hidden;
  height: var(--font-line-height-xl);
  max-height: var(--font-line-height-xl);
`;

const Arrow = styled(motion.span)`
  height: var(--font-line-height-xl);
  max-height: var(--font-line-height-xl);
  overflow: hidden;
  font: var(--font-xl);
`;

const IndexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
  color: var(--secondary-color);
  height: var(--font-line-height-xl);
  max-height: var(--font-line-height-xl);
  overflow: hidden;
`;

const Index = styled(motion.span)`
  height: var(--font-line-height-xl);
  max-height: var(--font-line-height-xl);
  overflow: hidden;
  font: var(--font-xl);
`;

const Item = ({ displayName, displayIndex, url, icon: Icon }: Props) => {
  const { isOver: isInitialAnimationOver } = useInitialAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleOpen = () => window.open(url, "_blank");
  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  const updateCursorPosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX - rect.left, y: clientY - rect.top });
  };

  const arrowProps = useMemo(
    () => ({
      animate: {
        y: isInitialAnimationOver ? (isHovered ? -10 : 0) : 40,
        rotate: isHovered ? -45 : 0,
        opacity: isHovered ? 1 : 0.5,
      },
      initial: { y: 40, rotate: 0, opacity: 0.5 },
    }),
    [isHovered, isInitialAnimationOver]
  );

  const nameProps = useMemo(
    () => ({
      animate: {
        y: isInitialAnimationOver ? (isHovered ? -10 : 0) : 40,
        opacity: isHovered ? 1 : 0.5,
      },
      initial: {
        y: 40,
        opacity: 0.5,
      },
    }),
    [isInitialAnimationOver, isHovered]
  );

  const indexProps = useMemo(
    () => ({
      animate: {
        y: isInitialAnimationOver ? 0 : -40,
        opacity: isHovered ? 1 : 0.5,
      },
      initial: {
        y: -40,
        opacity: 0.5,
      },
    }),
    [isInitialAnimationOver, isHovered]
  );

  const backgroundCircleProps = useMemo(
    () => ({
      style: { x: cursorPosition.x - 100, y: cursorPosition.y - 100 },
      animate: { opacity: isHovered ? 1 : 0 },
      initial: { opacity: 0 },
      transition: { duration: 0.1 },
    }),
    [cursorPosition, isHovered]
  );

  return (
    <Container
      onMouseMove={updateCursorPosition}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleOpen}
    >
      <BackgroundCircle {...backgroundCircleProps} />
      <IndexContainer>
        <Index {...indexProps}>{displayIndex}</Index>
      </IndexContainer>
      <NameContainer>
        <Name {...nameProps}>
          <Icon /> {displayName}
        </Name>
        <Arrow {...arrowProps}>
          <ArrowRightOutlined />
        </Arrow>
      </NameContainer>
    </Container>
  );
};

export { Item };
