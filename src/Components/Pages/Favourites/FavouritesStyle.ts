import styled from "styled-components";
import { device } from "../../../utils";
export const Container = styled.div`
  margin: 0 auto;
  margin-top: 1.5em;
`;
export const Wrapper = styled.div`
  justify-content: center;
  margin-bottom: 1em;
  display: grid;
  grid-gap: 1em;
  margin: 0 1em;

  @media ${device.mobileS} {
    margin-left: 2em;
  }
  @media ${device.mobileM} {
    grid-template-columns: repeat(2, 6fr);
  }

  @media ${device.mobileTablet} {
    grid-template-columns: repeat(3, 4fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(4, 3fr);
  }
  @media ${device.desktopL} {
    grid-template-columns: repeat(5, 2.5fr);
  }
`;
