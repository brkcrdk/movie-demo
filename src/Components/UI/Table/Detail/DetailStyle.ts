import styled from "styled-components";

interface ContentProps {
  expand: boolean;
}

export const Expandable = styled.tr``;
export const Content = styled.div`
  max-height: ${(p: ContentProps) => (p.expand ? "10%" : "0")};
  visibility: ${(p: ContentProps) => (p.expand ? "visible" : "hidden")};
  display: grid;
  grid-template-columns: repeat(2, 6fr);
`;
