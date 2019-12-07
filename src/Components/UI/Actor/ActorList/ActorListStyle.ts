import styled from "styled-components";
import { colours, device } from "../../../../utils";
interface InfoProps {
  active: boolean;
}
export const Container = styled.div`
  @media ${device.mobileS} {
    margin: 0;
    margin-left: -1em;
  }
  @media ${device.tablet} {
    margin-left: 0;
  }
`;
interface ContentProps {
  toggle: boolean;
}
export const Content = styled.ul`
  max-height: ${(p: ContentProps) => (p.toggle ? "100vh" : "2em")};
  transition: max-height 0.5s;
  overflow: hidden;
  @media ${device.mobileS} {
    margin-left: -1em;
  }
  @media ${device.tablet} {
    margin-left: 0;
  }
`;
export const InfoContainer = styled.div`
  display: ${(p: InfoProps) => (p.active ? "" : "none")};
`;
export const Header = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.5em;
  img {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    margin-right: 2em;
    object-fit: cover;
  }
`;
export const Splitter = styled.hr`
  margin-top: 0.5em;
  width: 100%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, ${colours.pink}, transparent);
`;
