import styled from "styled-components";
import { colours } from "../../../utils";
interface InfoProps {
  active: boolean;
}
export const Container = styled.div``;
export const Content = styled.ul``;
export const InfoContainer = styled.div`
  display: ${(p: InfoProps) => (p.active ? "" : "none")};
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
