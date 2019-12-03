import styled from "styled-components";

interface ExpandableProps {
  expand: boolean;
}

export const Expandable = styled.div`
  width: 100%;
  height: ${(p: ExpandableProps) => (p.expand ? "10em" : "0")};
  transition: 0.5s;
  div {
    width: 100%;
    display: ${(p: ExpandableProps) => (p.expand ? "flex" : "none")};
  }
`;
export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 6fr);
`;

export const Slayt = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  img {
    width: 2em;
  }
`;
