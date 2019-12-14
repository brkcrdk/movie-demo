import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { device } from "../../utils";
interface Store {
  toggle: {
    sidebar: boolean;
  };
}
interface Props {
  children: React.ReactNode;
}

interface DimProps {
  toggle: boolean;
}
export const DimContainer = styled.div`
  padding-top: 8em;
  transition: 0.5s;
  height: 100vh;
  @media ${device.mobileS} {
    margin-left: ${(p: DimProps) => (p.toggle ? "10em" : "0")};
  }
  @media ${device.tablet} {
    margin-left: 0;
  }
`;
const Dimmer: React.FC<Props> = ({ children }) => {
  const toggle = useSelector((state: Store) => state.toggle.sidebar);

  const render = React.Children.map(children, (child, index) => child);

  return <DimContainer toggle={toggle}>{render}</DimContainer>;
};

export default Dimmer;
