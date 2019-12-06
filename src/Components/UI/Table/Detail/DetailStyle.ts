import styled from "styled-components";
import { device } from "../../../../utils";
interface ExpandableProps {
  expand: boolean;
}

export const Expandable = styled.div`
  width: 100%;
  #content {
    display: ${(p: ExpandableProps) => (p.expand ? "grid" : "none")};
    grid-template-columns: repeat(2, 6fr);
    width: 100%;
    border-top: 1px solid red;
    padding: 0.5em;
    max-height: ${(p: ExpandableProps) => (p.expand ? "100%" : "0")};
    transition: max-height 0.5s;
  }
`;
export const Content = styled.div`
  position: relative;
`;

export const Slayt = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 0.5em;
  @media ${device.tablet} {
    grid-template-columns: 12fr;
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(2, 6fr);
  }
  p {
    margin: 0 0.5em;
  }
`;
