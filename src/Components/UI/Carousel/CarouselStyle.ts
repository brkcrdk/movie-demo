import styled from "styled-components";
import { device } from "../../../utils";
interface SlideProps {
  toggle: boolean;
}
export const Container = styled.div`
  @media ${device.mobileS} {
    margin: 0 2em;
  }
  @media ${device.tablet} {
    margin: 0 1em 0 2em;
  }
`;
export const Slayt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    &:first-child {
      left: -1.5em;
    }
    &:last-child {
      right: -1.5em;
    }
  }
`;

export const Slide = styled.img`
  display: ${(p: SlideProps) => (p.toggle ? "flex" : "none")};
  @media ${device.mobileS} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;
