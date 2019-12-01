import React, { useCallback } from "react";
import Search from "../Search/Search";
import Pages from "./Pages";
import styled from "styled-components";
import { device } from "../../../utils";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../store/Toggles/action";
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
  const dispatch = useDispatch();
  const handleSidebar = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);
  return (
    <Container>
      <Desktop>
        <Pages />
        <Search />
      </Desktop>
      <Mobile>
        <button onClick={handleSidebar}>X</button>
        <button>Search</button>
      </Mobile>
    </Container>
  );
};

export default Navbar;
