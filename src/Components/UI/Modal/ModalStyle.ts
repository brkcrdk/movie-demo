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
  overflow: auto;
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

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

export const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
