import styled from "styled-components";
import { fonts, colours, device } from "../../../../utils";

interface TabProps {
  active: boolean;
}
interface ContentProps {
  active: boolean;
}
export const Container = styled.div`
  width: 100%;
  margin-top: 1em;
  font-family: ${fonts.aBeeZee};
`;

export const Tabs = styled.ul`
  background: transparent;
  height: 3em;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin-left: -1em;
`;

export const Tab = styled.li`
  width: 100%;
  min-width: 5em;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: 0.5s ease-in-out;
  display: inline-block;
  color: ${(p: TabProps) => (p.active ? `${colours.pink}` : "black")};
  text-decoration: none;
  font-weight: 800;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${colours.pink};
    transition: width 0.5s;
  }
  &:hover {
    outline: none;
  }
  &:hover::after {
    width: 50%;
    transition: width 0.5s;
  }
  @media ${device.mobileS} {
    font-size: ${(p: TabProps) => (p.active ? "1em" : "0.8em")};
  }
  @media ${device.mobileTablet} {
    font-size: ${(p: TabProps) => (p.active ? "1.3em" : "1em")};
  }
`;

export const Content = styled.div`
  ${(p: ContentProps) => (p.active ? "" : "display:none")};
  width: 100%;
  height: 100%;
  transition: transform 300ms ease-in-out;
  animation: fade-in 2s;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
