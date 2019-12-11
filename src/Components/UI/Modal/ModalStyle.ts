import styled from "styled-components";
// import { device } from "../../../utils";
interface ContainerProps {
  toggle: boolean;
}
export const Container = styled.div`
  display: ${(p: ContainerProps) => (p.toggle ? "block" : "none")};
  /* position: "absolute";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: "rgba(0, 0, 0, 0.15)"; */
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 50%;
  height: 50%;
  overflow: auto;
  background-color: transparent;
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
