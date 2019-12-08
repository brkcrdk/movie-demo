import styled from "styled-components";
import { device } from "../../../../../utils";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  position: fixed;
  padding-bottom: 1em;
  padding-top: 1.5em;

  @media ${device.mobileS} {
    display: grid;
    grid-template-columns: 12fr;
    align-items: flex-start;
    margin-top: -2.6em;
    z-index: 1;
  }
  @media ${device.mobileTablet} {
    grid-template-columns: repeat(2, 6fr);
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 0.9em;
    z-index: 1;
  }
`;

export const GenreWrap = styled.div`
  @media ${device.mobileS} {
    margin-left: 1em;
  }
  @media ${device.tablet} {
    margin-left: 0;
  }
`;
