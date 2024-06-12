import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: calc(100vw / 2);
  padding: var(--spacing-m);
  border: 1px solid var(--paper-border-secondary-color);
  height: calc(100vh - 100vh / 4);
  transition: border var(--timing-s) ease;
  overflow: hidden;

  &:hover {
    border: 1px solid var(--paper-border-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100dvh;
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

const DemoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  const backgroundCircleProps = useMemo(
    () => ({
      style: { x: cursorPosition.x - 100, y: cursorPosition.y - 100 },
      animate: { opacity: isHovered ? 1 : 0 },
      initial: { opacity: 0 },
      transition: { duration: 0.1 },
    }),
    [cursorPosition, isHovered]
  );

  const updateCursorPosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX - rect.left, y: clientY - rect.top });
  };

  return (
    <Container
      onMouseMove={updateCursorPosition}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <BackgroundCircle {...backgroundCircleProps} />
    </Container>
  );
};

export { DemoSection };
