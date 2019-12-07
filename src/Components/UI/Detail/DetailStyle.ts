import styled from "styled-components";
import { colours, device } from "../../../utils";

interface ExpandableProps {
  expand: boolean;
}

export const Container = styled.div`
  display: ${(p: ExpandableProps) => (p.expand ? "grid" : "none")};
  width: 100%;
  overflow: hidden;
  border-top: 1px solid ${colours.secondaryText};
  padding: 0.5em;
  transition: 0.5s;
  @media ${device.mobileS} {
    grid-template-columns: 12fr;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 6fr);
  }
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
  @media ${device.mobileS} {
    display: grid;
    grid-template-columns: 12fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 12fr;
  }
  @media ${device.desktop} {
    grid-template-columns: ${(p: SlaytProps) =>
      p.toggle ? "12fr" : "6fr 6fr"};
  }
`;
