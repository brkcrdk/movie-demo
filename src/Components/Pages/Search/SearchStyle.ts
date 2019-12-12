import styled from "styled-components";
import { device, colours } from "../../../utils";

interface MobileProps {
  toggle: boolean;
}
interface ResultWrapperProps {
  isEmpty: boolean;
}
export const Container = styled.div`
  li {
    list-style: none;
    padding: 0.5em;
  }
`;

export const Mobile = styled.div`
  transform: ${(p: MobileProps) =>
    p.toggle ? "translateX(0)" : "translateX(150%)"};
  transition: transform 0.5s ease-in-out;
  position: fixed;
  top: 5.9em;
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
export const Desktop = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: grid;
    position: relative;
    width: 100%;
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

export const ResultWrapper = styled.div`
  visibility: ${(p: ResultWrapperProps) => (p.isEmpty ? "visible" : "hidden")};
  max-height: 70vh;
  min-width: 25%;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  z-index: 3;
  position: fixed;
  padding-top: 0.5em;
  border: 1px solid ${colours.secondaryText};
  @media ${device.mobileS} {
    top: 2.9em;
    width: 99%;
  }
  @media ${device.tablet} {
    top: 5.9em;
    width: initial;
  }

  div {
    width: 100%;
    display: grid;
    margin-left: -1em;
    padding: 0;
    grid-template-columns: 2fr 10fr;
    grid-gap: 0;
    align-items: center;
    text-align: left;
    cursor: pointer;
  }
  img {
    height: 1.5em;
  }
  a {
    text-decoration: none;
    color: ${colours.primaryText};
  }
`;
