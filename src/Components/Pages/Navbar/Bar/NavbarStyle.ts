import styled from "styled-components";
import { device, colours, fonts } from "../../../../utils";

export const Container = styled.div`
  position: fixed;
  padding-top: 1em;
  padding-bottom: 1em;
  top: 0;
  background-color: white;
  width: 100%;
  z-index: 10;
  overflow-x: hidden;

  @media ${device.mobileS} {
    border-bottom: 0.5px solid ${colours.secondaryText};
  }
  @media ${device.tablet} {
    border-bottom: 1px solid ${colours.secondaryText};
  }
  @media ${device.widescreen} {
    width: inherit;
  }
`;

export const Desktop = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    padding: 0 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.widescreen} {
    display: flex;
    min-width: 89em;
  }
`;

export const Mobile = styled.div`
  @media ${device.mobileS} {
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  span {
    font-family: ${fonts.MontserratAlternates};
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: 600;
    color: ${colours.pink};
  }
`;
