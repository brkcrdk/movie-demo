import styled from "styled-components";
import { colours, device } from "../../../utils";

interface ExpandableProps {
  expand: boolean;
}

export const Container = styled.div`
  display: ${(p: ExpandableProps) => (p.expand ? "grid" : "none")};
  overflow: hidden;
  border-top: 1px solid ${colours.secondaryText};
  padding: 0.5em;
  @media ${device.mobileS} {
    grid-template-columns: 12fr;
    width: 96%;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 6fr);
    width: 100%;
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
