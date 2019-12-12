import styled from "styled-components";
import { colours, fonts } from "../../../utils";
interface NumberProps {
  active: boolean;
}
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
`;

export const Number = styled.button`
  border: none;
  background: transparent;
  margin: 0 0.3em;
  cursor: pointer;
  font-family: ${fonts.aBeeZee};
  border-bottom: ${(p: NumberProps) =>
    p.active ? `2px solid ${colours.pink}` : ""};
`;
