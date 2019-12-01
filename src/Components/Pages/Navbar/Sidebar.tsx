import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Pages from "../Navbar/Pages";
interface Props {}
interface ToggleStore {
  toggle: {
    sidebar: boolean;
  };
}
interface ContainerProps {
  toggle: boolean;
}
const Container = styled.div`
  height: 100%;
  width: ${(p: ContainerProps) => (p.toggle ? "10em" : "0")};
  overflow-x: hidden;
  position: fixed;
  z-index: 1;
  transition: 0.5s;
`;
const Sidebar: React.FC<Props> = () => {
  const toggle = useSelector((state: ToggleStore) => state.toggle.sidebar);
  return (
    <Container toggle={toggle}>
      <Pages />
    </Container>
  );
};

export default Sidebar;
