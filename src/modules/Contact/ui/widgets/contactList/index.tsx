import { contactListConfig } from "@modules/Contact/configs";
import styled from "styled-components";
import { Item } from "./Item";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactList = () => {
  return <Container>{contactListConfig.map(Item)}</Container>;
};

export { ContactList };
