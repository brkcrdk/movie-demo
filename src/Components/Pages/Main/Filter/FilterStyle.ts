import styled from "styled-components";
import { device } from "../../../../utils";
interface MobileProps {
  toggle: boolean;
}

export const Container = styled.div``;

export const Desktop = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;

export const Mobile = styled.div`
  @media ${device.mobileS} {
    display: grid;
    div {
      transform: ${(p: MobileProps) =>
        p.toggle ? "translateY(0)" : "translateY(-150%)"};
      transition: 0.5s;
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;
