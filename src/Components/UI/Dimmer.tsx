import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
interface Store {
  toggle: {
    sidebar: boolean;
  };
}
interface DimProps {
  toggle: boolean;
}
interface Props {
  children: React.ReactNode;
}
export const DimContainer = styled.div`
  margin-left: ${(p: DimProps) => (p.toggle ? "10em" : "0")};
  transition: 0.5s;
  height: 100vh;
  padding-top: 7em;
`;
const Dimmer: React.FC<Props> = ({ children }) => {
  const toggle = useSelector((state: Store) => state.toggle.sidebar);

  const render = React.Children.map(children, (child, index) => child);

  return <DimContainer toggle={toggle}>{render}</DimContainer>;
};

export default Dimmer;
