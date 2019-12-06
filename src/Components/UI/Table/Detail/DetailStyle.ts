import styled from "styled-components";
import { device } from "../../../../utils";
interface ExpandableProps {
  expand: boolean;
}
interface SlaytProps {
  toggle: boolean;
}
export const Expandable = styled.div`
  width: 100%;

  #content {
    display: ${(p: ExpandableProps) => (p.expand ? "grid" : "none")};
    overflow: hidden;
    grid-template-columns: repeat(2, 6fr);
    width: 100%;
    border-top: 1px solid red;
    padding: 0.5em;
  }
`;
export const Content = styled.div``;

export const Slayt = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 0.5em;
  @media ${device.tablet} {
    grid-template-columns: 12fr;
  }
  @media ${device.desktop} {
    grid-template-columns: ${(p: SlaytProps) =>
      p.toggle ? "12fr" : "repeat(2,6fr)"};
    ${(p: SlaytProps) => (p.toggle ? "min-height:30em" : "")}
    div {
      ${(p: SlaytProps) => (p.toggle ? "width:80%;margin:0 auto" : "")}
    }
  }
  p {
    ${(p: SlaytProps) =>
      p.toggle
        ? "margin-top:-8em;padding:0 3em;"
        : "margin-top:0;margin:0 0.5em"};
  }
`;
export const ActorSection = styled.div``;
