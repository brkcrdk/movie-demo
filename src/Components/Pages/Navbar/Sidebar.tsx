import React, { useState } from "react";
import styled from "styled-components";
interface Props {}
interface ContainerProps {
  toggle: boolean;
}
const Container = styled.div`
  height: 100%;
  width: ${(p: ContainerProps) => (p.toggle ? "70%" : "0")};
`;
const Sidebar: React.FC<Props> = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return <Container toggle={toggle}>Sidebar goes here.</Container>;
};

export default Sidebar;
