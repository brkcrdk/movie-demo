import React, { useCallback, useState, useEffect } from "react";
import Search from "../Search/Search";
import Pages from "./Pages";
import styled from "styled-components";
import { device, colours } from "../../../utils";
import { useDispatch } from "react-redux";
import { toggleSidebar, toggleSearch } from "../../../store/Toggles/action";
interface Props {}

interface ContainerProps {
  scroll: boolean;
}

const Container = styled.div`
  position: fixed;
  padding-top: 1em;
  padding-bottom: 1em;
  top: 0;
  background-color: white;
  width: 100%;
  z-index: 1;
  overflow-x: hidden;
  box-shadow: ${(p: ContainerProps) =>
    p.scroll ? `${colours.boxShadow}` : ""};
  @media ${device.mobileS} {
    border-bottom: 0.5px solid ${colours.secondaryText};
  }
  @media ${device.tablet} {
    border-bottom: none;
  }
  @media ${device.widescreen} {
    width: inherit;
  }
`;
const Desktop = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    padding: 0 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.widescreen} {
    display: flex;
    min-width: 89em;
  }
`;
const Mobile = styled.div`
  @media ${device.mobileS} {
    padding: 1em 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const Navbar: React.FC<Props> = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const dispatch = useDispatch();
  const handleSidebar = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);
  const handleSearch = useCallback(() => {
    dispatch(toggleSearch());
  }, [dispatch]);
  return (
    <Container scroll={scroll}>
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
