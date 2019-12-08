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

    div {
      transform: ${(p: MobileProps) =>
        p.toggle ? "translateY(0)" : "translateY(-150%)"};
      transition: 0.5s;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;
const Close = styled.span`
  position: fixed;
  z-index: 1;
  right: 0.5em;
  top: 6.5em;
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
        <Close onClick={handleToggle}>
          <i className="fas fa-filter" />
        </Close>
      </Mobile>
    </Container>
  );
};

export default Filters;
