import React from "react";
import Search from "../Search/Search";
import Pages from "./Pages";
import styled from "styled-components";
import { device } from "../../../utils";
interface Props {}
const Container = styled.div`
  margin: 2em 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:last-child {
    justify-content: right;
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
