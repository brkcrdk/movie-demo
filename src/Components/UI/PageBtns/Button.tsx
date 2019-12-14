import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colours, fonts, device } from "../../../utils";
interface Props {
  route: string;
  innerText: string;
}

const Button = styled(NavLink)`
  &&& {
    text-decoration: none;
    color: ${colours.pink};
    padding: 0.5em;
    border: 1px solid ${colours.pink};
    outline: none;
    font-family: ${fonts.MontserratAlternates};
    font-weight: 600;
    @media ${device.tablet} {
      font-size: 0.8em;
    }
    @media ${device.desktop} {
      font-size: 1em;
    }
  }
`;

const PageButton: React.FC<Props> = ({ route, innerText }) => {
  const activeLink = {
    color: "white",
    backgroundColor: `${colours.pink}`,
    transition: "0.2s",
    transform: "scale(1.05)"
  };
  const renderLink = (
    <Button activeStyle={activeLink} exact to={`${route}`}>
      {innerText}
    </Button>
  );
  return renderLink;
};

export default PageButton;
