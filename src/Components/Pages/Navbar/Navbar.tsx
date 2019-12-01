import React from "react";
import Search from "../Search/Search";
import Pages from "./Pages";
import styled from "styled-components";
import { device } from "../../../utils";
import Sidebar from "./Sidebar";
interface Props {}
const Container = styled.div``;
const Desktop = styled.div`
  margin: 2em 0;
  justify-content: space-around;
  align-items: center;
  &:last-child {
    justify-content: right;
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;
const Mobile = styled.div`
  @media ${device.mobileS} {
    display: flex;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const Navbar: React.FC<Props> = () => {
  return (
    <Container>
      <Desktop>
        <Pages />
        <Search />
      </Desktop>
      <Mobile>
        <button>X</button>
        <button>Search</button>
      </Mobile>
    </Container>
  );
};

export default Navbar;
