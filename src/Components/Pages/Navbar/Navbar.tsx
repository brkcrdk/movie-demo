import React from "react";
import Search from "../Search/Search";
import Pages from "../../UI/PageBtns/Pages";
import styled from "styled-components";
interface Props {}

const Container = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 10fr 2fr;
  &:first-child {
    text-align: center;
    align-items: center;
  }
`;

const Navbar: React.FC<Props> = () => {
  return (
    <Container>
      <Pages />
      <Search />
    </Container>
  );
};

export default Navbar;
