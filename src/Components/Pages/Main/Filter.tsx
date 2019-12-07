import React, { useState } from "react";
import Sort from "../Main/Filters/Sort/Sort";
import styled from "styled-components";
import { device } from "../../../utils";
interface Props {
  activePage: number;
}

const Container = styled.div``;

const Desktop = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;
interface MobileProps {
  toggle: boolean;
}
const Mobile = styled.div`
  @media ${device.mobileS} {
    display: grid;
    position: relative;
    button {
      position: fixed;
      z-index: 1;
      right: 0.5em;
      top: 6.5em;
    }
    div {
      transform: ${(p: MobileProps) =>
        p.toggle ? "translateX(0)" : "translateX(-150%)"};
      transition: 0.5s;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const Filters: React.FC<Props> = ({ activePage }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Desktop>
        <Sort activePage={activePage} />
      </Desktop>
      <Mobile toggle={toggle}>
        <Sort activePage={activePage} />
        <button onClick={handleToggle}>Toggle</button>
      </Mobile>
    </Container>
  );
};

export default Filters;
