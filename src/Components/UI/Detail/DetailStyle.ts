import styled from "styled-components";
import { colours, device } from "../../../utils";

interface ExpandableProps {
  expand: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: ${(p: ExpandableProps) => (p.expand ? "grid" : "none")};
  overflow: hidden;
  grid-template-columns: repeat(2, 6fr);
  width: 100%;
  border-top: 1px solid ${colours.secondaryText};
  padding: 0.5em;
`;
interface SlaytProps {
  toggle: boolean;
}
export const Slayt = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 0.5em;
  text-align: center;
  p {
    padding: 0 1em;
  }
  @media ${device.tablet} {
    grid-template-columns: 12fr;
  }
  @media ${device.desktop} {
    grid-template-columns: ${(p: SlaytProps) =>
      p.toggle ? "12fr" : "6fr 6fr"};
  }
`;
