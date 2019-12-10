import styled from "styled-components";
import { device } from "../../../utils";
export const Container = styled.div`
  margin: 0 auto;
  margin-top: 1.5em;
`;
export const Wrapper = styled.div`
  margin: 0 5em;
  justify-content: center;
  margin-bottom: 1em;
  display: grid;

  @media ${device.mobileTablet} {
    grid-template-columns: repeat(2, 6fr);
    grid-gap: 1em;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 4fr);
    grid-gap: 1em;
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(4, 3fr);
    grid-gap: 1em;
  }
  @media ${device.desktopL} {
    grid-template-columns: repeat(5, 2.5fr);
    grid-gap: 1em;
  }
`;
