import styled from "styled-components";
import { device, fonts, colours } from "../../../../utils";
interface WrapperProps {
  toggle: boolean;
  id?: string | number;
}
interface ContentProps {
  section: string;
}

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
  padding-top: 1em;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  align-items: center;
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid ${colours.pink};
  text-align: center;
  @media ${device.tablet} {
    margin-top: -3.1em;
  }
`;
export const Content = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${(p: ContentProps) =>
    p.section === "discover" ? "12em" : "2em"};
  overflow-x: hidden;
`;
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
