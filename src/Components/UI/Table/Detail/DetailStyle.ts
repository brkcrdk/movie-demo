import styled from "styled-components";

interface ContentProps {
  expand: boolean;
}

export const Expandable = styled.tr``;
export const Content = styled.div`
  height: ${(p: ContentProps) => (p.expand ? "10em" : "0")};
  opacity: ${(p: ContentProps) => (p.expand ? "1" : "0")};
  display: grid;
  grid-template-columns: repeat(2, 6fr);
  transition: 0.5s;
`;
