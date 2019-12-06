import styled from "styled-components";
import { colours } from "../../../utils";
interface ContentProps {
  active: boolean;
}
export const Container = styled.div``;
export const Content = styled.ul`
  div {
    display: ${(p: ContentProps) => (p.active ? "flex" : "none")};
    height: ${(p: ContentProps) => (p.active ? "100%" : "0")};
    transition: height 0.5s;
    padding: 0;
    margin: 0;
  }
`;
export const List = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.5em;
  img {
    margin-right: 1em;
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
