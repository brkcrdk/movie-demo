import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colours, fonts, device } from "../../../utils";
interface Props {
  route: string;
  innerText: string;
}

const borderRadius = `0.2em`;

const Button = styled(NavLink)`
  &&& {
    text-decoration: none;
    color: ${colours.pink};
    padding: 0.5em;
    border: 1px solid ${colours.pink};
    outline: none;
    font-family: ${fonts.MontserratAlternates};
    font-weight: 600;
  }
`;

const PageButton: React.FC<Props> = ({ route, innerText }) => {
  const activeLink = {
    color: "white",
    backgroundColor: `${colours.pink}`,
    transition: "0.2s",
    transform: "scale(1.05)"
  };

  const renderLink =
    route === "/" ? (
      <Button activeStyle={activeLink} exact to="/">
        {innerText}
      </Button>
    ) : (
      <Button activeStyle={activeLink} exact to={`/movies${route}`}>
        {innerText}
      </Button>
    );
  return renderLink;
};

export default PageButton;
