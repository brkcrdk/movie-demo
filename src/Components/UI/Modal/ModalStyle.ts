import styled from "styled-components";
// import { device } from "../../../utils";
interface ContainerProps {
  toggle: boolean;
}
export const Container = styled.div`
  display: ${(p: ContainerProps) => (p.toggle ? "block" : "none")};
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
  backdrop-filter: blur(2px);
  animation-name: modalFadeIn;
  animation-duration: 0.5s;
  @keyframes modalFadeIn {
    from {
      transform: scale(0);
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
      transform: scale(1);
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
`;
interface ContentProps {
  url: string;
}
// linear-gradient(
//       to bottom,
//       rgba(255, 0, 0, 0.45),
//       rgba(255, 0, 0, 0.45)
//     ),
export const ModalContent = styled.div`
  background-image: url(${(p: ContentProps) => `${p.url}`});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10% auto;
  border: 1px solid #888;
  width: 80%;
  position: relative;
`;
export const Content = styled.div`
  margin-top: 15em;
`;
export const Top = styled.div`
  display: flex;
  border: 1px solid red;
  background: linear-gradient(to bottom, transparent, white);
  > img {
    width: 6em;
    border-radius: 0.6em;
  }
`;

export const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 1.5em;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0.3em;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
