import { useInitialAnimation } from "@app/context/initialAnimation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const Paragraph = styled.p`
  position: relative;
  color: var(--secondary-color);
  font: var(--font-m);
  width: 100%;
`;

const TokenContainer = styled(motion.span)`
  overflow: hidden;
  position: relative;
  display: inline-block;
  box-sizing: content-box;
  height: var(--font-line-height-m);
  max-height: var(--font-line-height-m);
  white-space: nowrap;
  font: var(--font-m);
  margin-bottom: var(--spacing-s);

  @media (max-width: 768px) {
    font: var(--font-xs);
    margin-bottom: 0;
    height: var(--font-line-height-s);
    max-height: var(--font-line-height-s);
  }
`;

const Token = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;

type Props = {
  children: string;
  delay?: number;
  isHovered: boolean;
  padding?: boolean;
  bullet?: boolean;
};

const AnimatedText = ({
  isHovered,
  children,
  delay = 0,
  bullet = false,
}: Props) => {
  const { isOver: isInitialAnimationOver } = useInitialAnimation();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <Container>
      {bullet ? (
        <TokenContainer>
          <Token
            animate={{
              y: isInitialAnimationOver ? 0 : 40,
              opacity: isHovered ? 1 : 0.5,
            }}
            initial={{ y: 40, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              delay: initialLoad ? 0 + delay : 0,
            }}
          >
            •{" "}
          </Token>
        </TokenContainer>
      ) : null}
      <Paragraph>
        {children.split(" ").map((word, index) => (
          <TokenContainer key={word}>
            <Token
              animate={{
                y: isInitialAnimationOver ? 0 : 40,
                opacity: isHovered ? 1 : 0.5,
              }}
              initial={{ y: 40, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                delay: initialLoad ? index * 0.005 + delay : 0,
              }}
            >
              {word}{" "}
            </Token>
          </TokenContainer>
        ))}
      </Paragraph>
    </Container>
  );
};

export { AnimatedText };
