import styled from "styled-components";
import { device } from "../../../../../utils";

export const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 93em;
  background-color: white;
  position: fixed;
  z-index: 1;
  @media ${device.mobileS} {
    margin-top: -4em;
  }
  @media ${device.tablet} {
    margin-top: 0.5rem;
  }
`;

export const SortWrapper = styled.div`
  padding-bottom: 1em;
  padding-top: 1.5em;

  @media ${device.mobileS} {
    display: grid;
    grid-template-columns: 12fr;
    align-items: flex-start;
  }
  @media ${device.mobileTablet} {
    grid-template-columns: repeat(2, 6fr);
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5em;
  }
`;
export const GenreWrap = styled.div`
  @media ${device.mobileS} {
    margin-left: 1em;
    background-color: white;
    z-index: 1;
  }
  @media ${device.tablet} {
    margin-left: 0;
  }
`;
