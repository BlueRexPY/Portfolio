import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/__404')({
  component: () => <div />,
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

const NotFound = () => {
  return <Container>Page Not Found</Container>;
};
