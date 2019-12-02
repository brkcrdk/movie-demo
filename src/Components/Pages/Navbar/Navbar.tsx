import React, { useCallback } from "react";
import Search from "../Search/Search";
import Pages from "./Pages";
import styled from "styled-components";
import { device } from "../../../utils";
import { useDispatch } from "react-redux";
import { toggleSidebar, toggleSearch } from "../../../store/Toggles/action";
interface Props {}
const Container = styled.div`
  position: fixed;
  padding: 2em 0;
  top: 0;
  background-color: white;
  width: 100%;
`;
const Desktop = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Mobile = styled.div`
  @media ${device.mobileS} {
    display: flex;
    justify-content: space-around;
    align-items: center;
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
  const handleSearch = useCallback(() => {
    dispatch(toggleSearch());
  }, [dispatch]);
  return (
    <Container>
      <Desktop>
        <Pages />
        <Search />
      </Desktop>
      <Mobile>
        <button onClick={handleSidebar}>X</button>
        <Search />
        <button onClick={handleSearch}>Search</button>
      </Mobile>
    </Container>
  );
};

export default Navbar;
