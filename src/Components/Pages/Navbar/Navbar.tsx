import React from "react";
import Search from "../Search/Search";
import Pages from "./Pages";
import styled from "styled-components";
import { device } from "../../../utils";
interface Props {}
const Container = styled.div`
  margin: 2em 0;

  &:first-child {
    text-align: center;
    align-items: center;
  }
  @media ${device.mobileS} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Navbar: React.FC<Props> = () => {
  return (
    <Container>
      <Pages />
      {/* <Search /> */}
    </Container>
  );
};

export default Navbar;
