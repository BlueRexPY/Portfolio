import { routesPaths } from "@app/configs/router";
import { useDarkMode } from "@shared/lib/darkMode";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import styled from "styled-components";

const BigLogo = styled.img`
  width: 50%;
  padding-bottom: var(--spacing-xl);
`;

const StackList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: var(--spacing-xs);

  & > img {
    border-radius: var(--border-radius-xs);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

const Home = () => {
  return <Container>sad</Container>;
};

export const Route = createFileRoute(routesPaths.home)({
  component: () => <Home />,
});
