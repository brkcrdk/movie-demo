import styled from "styled-components";
import { device, colours, fonts } from "../../../utils";

export const Container = styled.div`
  font-family: ${fonts.aBeeZee};
  @media ${device.mobileS} {
    margin: 0.5em 1em;
  }
  @media ${device.tablet} {
    margin: 0 1em;
  }
`;
export const Select = styled.select`
  width: 100%;
  min-width: 10em;
  padding: 0.5em 0.5em;
  @media ${device.desktop} {
    width: 15em;
  }
`;

export const Splitter = styled.hr`
  border: 0.5px solid ${colours.secondaryText};
`;
export const Label = styled.label`
  font-weight: 800;
`;
export const Option = styled.option`
  font-family: ${fonts.aBeeZee};
  font-size: 1em;
`;
