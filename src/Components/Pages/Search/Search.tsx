import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { device } from "../../../utils";
import SearchInput from "./SearchInput";
interface Props {}

interface ToggleStore {
  toggle: {
    search: boolean;
  };
}
interface MobileProps {
  toggle: boolean;
}

const Mobile = styled.div`
  transform: ${(p: MobileProps) =>
    p.toggle ? "translateX(0)" : "translateX(150%)"};
  transition: transform 0.5s ease-in-out;
  position: fixed;
  top: 5.3em;
  left: 0;
  width: 100%;
  text-align: center;
  input {
    width: 80%;
    padding: 1em;
    margin: 0 auto;
  }
  @media ${device.mobileS} {
    display: grid;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const Desktop = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: grid;
    position: relative;
    width: 100%;
    div {
      background-color: red;
      z-index: 5;
      position: fixed;
      top: 8em;
      padding-top: 1em;
    }
    input {
      padding: 1em 0.5em;
      width: 15em;
      @media ${device.desktop} {
        width: 20em;
      }
      @media ${device.desktopL} {
        width: 25em;
      }
    }
  }
`;
const Container = styled.div``;
const Search: React.FC<Props> = () => {
  const toggle = useSelector((state: ToggleStore) => state.toggle.search);
  return (
    <Container>
      <Mobile toggle={toggle}>
        <SearchInput />
      </Mobile>
      <Desktop>
        <SearchInput />
      </Desktop>
    </Container>
  );
};

export default Search;
