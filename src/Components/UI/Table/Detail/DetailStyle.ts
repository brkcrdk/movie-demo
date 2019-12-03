import styled from "styled-components";

interface ExpandableProps {
  expand: boolean;
}

export const Expandable = styled.div`
  width: 100%;
  max-height: ${(p: ExpandableProps) => (p.expand ? "100%" : "0")};
  transition: max-height 0.5s;
  border-bottom: 1px solid lightgray;

  #content {
    width: 100%;
    display: ${(p: ExpandableProps) => (p.expand ? "grid" : "none")};
  }
`;
export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 6fr);
`;

export const Slayt = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 6fr);
`;
