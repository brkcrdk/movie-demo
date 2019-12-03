import styled from "styled-components";

interface ExpandableProps {
  expand: boolean;
}

export const Expandable = styled.div`
  width: 100%;
  max-height: ${(p: ExpandableProps) => (p.expand ? "100%" : "0")};
  transition: max-height 0.5s;
  #content {
    width: 100%;
    display: ${(p: ExpandableProps) => (p.expand ? "flex" : "none")};
  }
`;
export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 6fr);
`;

export const Slayt = styled.div``;

interface SlideProps {
  toggle: boolean;
}
export const Slide = styled.img`
  display: ${(p: SlideProps) => (p.toggle ? "flex" : "none")};
  width: 2em;
`;
