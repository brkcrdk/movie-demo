import styled from "styled-components";

interface ExpandableProps {
  expand: boolean;
}

export const Expandable = styled.tr`
  height: ${(p: ExpandableProps) => (p.expand ? "10%" : "0")};
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
`;
