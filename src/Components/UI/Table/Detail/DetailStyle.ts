import styled from "styled-components";

interface ExpandableProps {
  expand: boolean;
}

export const Expandable = styled.div`
  border: 1px solid red;
  width: 100%;
  height: ${(p: ExpandableProps) => (p.expand ? "10em" : "0")};
  transition: 0.5s;
  div {
    display: ${(p: ExpandableProps) => (p.expand ? "flex" : "none")};
  }
`;
export const Content = styled.div`
  padding: 0 2em;
  display: grid;
  grid-template-columns: repeat(2, 6fr);
`;
