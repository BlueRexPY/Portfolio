import { routesPaths } from "@app/configs/router";
import { ContactList } from "@modules/Contact";
import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <ContactList />
    </Container>
  );
};

export const Route = createFileRoute(routesPaths.home)({
  component: () => <Home />,
});
