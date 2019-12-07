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
  margin-top: -3.05em;
  width: 100%;
  max-width: 91em;
  position: fixed;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  align-items: center;
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid ${colours.pink};
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;
  padding-top: 3em;
  overflow: hidden;
`;
interface WrapperProps {
  toggle: boolean;
}
export const Wrapper = styled.div`
  position: relative;
  max-height: ${(p: WrapperProps) => (p.toggle ? "100vh" : "5em")};
  transition: max-height 0.5s;
  overflow: hidden;
  input {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 2.5em;
    left: 1em;
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
