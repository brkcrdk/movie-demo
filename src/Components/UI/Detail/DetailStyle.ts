import styled from "styled-components";
import { colours } from "../../../utils";
interface ExpandableProps {
  expand: boolean;
}

export const Expandable = styled.div`
  width: 100%;
  #content {
    display: ${(p: ExpandableProps) => (p.expand ? "grid" : "none")};
    overflow: hidden;
    grid-template-columns: repeat(2, 6fr);
    width: 100%;
    border-top: 1px solid ${colours.secondaryText};
    padding: 0.5em;
  }
`;

export const Content = styled.div``;

export const Slayt = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  align-items: center;
  grid-gap: 0.5em;
`;
export const ActorSection = styled.div``;
