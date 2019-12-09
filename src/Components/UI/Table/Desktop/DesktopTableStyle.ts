import styled from "styled-components";
import { device, fonts, colours } from "../../../../utils";

export const Container = styled.div`
  width: 100%;
  font-family: ${fonts.aBeeZee};
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: inline-block;
  }
`;

export const Header = styled.div`
  width: 100%;
  max-width: 93em;
  position: fixed;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  align-items: center;
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid ${colours.pink};
  border-top: 1px solid ${colours.secondaryText};
  text-align: center;
  @media ${device.tablet} {
    margin-top: -3.1em;
  }
  @media ${device.desktop} {
    margin-top: -3.08em;
  }
  @media ${device.desktopL} {
    margin-top: -3em;
  }
`;

interface ContentProps {
  section: string;
}
export const Content = styled.div`
  width: 100%;
  padding-top: ${(p: ContentProps) =>
    p.section === "discover" ? "7em" : "2em"};
  overflow: hidden;
`;
interface WrapperProps {
  toggle: boolean;
  id?: string | number;
}
export const Wrapper = styled.div`
  position: relative;
  max-height: ${(p: WrapperProps) => (p.toggle ? "100vh" : "5em")};
  transition: max-height 0.5s;
  overflow: hidden;
  > button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1.5em;
    left: 0.4em;
  }
`;
export const Row = styled.ul`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  align-items: center;
  grid-gap: 0.5em;
  text-align: center;
  list-style: none;
  cursor: pointer;
`;
export const Col = styled.li``;
