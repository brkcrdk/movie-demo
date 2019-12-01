import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
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
  border: 1px solid red;
  width: ${(p: ContainerProps) => (p.toggle ? "70%" : "0")};
`;
const Sidebar: React.FC<Props> = () => {
  const toggle = useSelector((state: ToggleStore) => state.toggle.sidebar);
  return <Container toggle={toggle}>Sidebar goes here.</Container>;
};

export default Sidebar;
