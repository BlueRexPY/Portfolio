import { ArrowRightOutlined } from "@ant-design/icons";
import type { ContactItemConfigType as Props } from "@modules/Contact/configs";
import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: calc(100vw / 3);
  border: 1px solid var(--paper-border-color);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  padding: var(--spacing-m);
  height: calc(100vh / 4);
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  color: var(--secondary-color);
  width: 100%;
`;

const Name = styled.span`
  font: var(--font-xl);
`;

const Arrow = styled.span`
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
`;

const Index = styled.span`
  font: var(--font-xl);
`;

const Item = ({ displayName, displayIndex, url, icon: Icon }: Props) => {
  return (
    <Container>
      <IndexContainer>
        <Index>{displayIndex}</Index>
      </IndexContainer>
      <NameContainer>
        <Name>
          <Icon /> {displayName}
        </Name>
        <Arrow>
          <ArrowRightOutlined />
        </Arrow>
      </NameContainer>
    </Container>
  );
};

export { Item };
