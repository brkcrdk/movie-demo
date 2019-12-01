import React from "react";
import { NavLink } from "react-router-dom";
interface Props {
  route: string;
  innerText: string;
}

const PageButton: React.FC<Props> = ({ route, innerText }) => {
  const renderLink =
    route === "/" ? (
      <NavLink activeStyle={{ color: "red" }} exact to="/">
        {innerText}
      </NavLink>
    ) : (
      <NavLink activeStyle={{ color: "red" }} exact to={`/movies${route}`}>
        {innerText}
      </NavLink>
    );
  return renderLink;
};

export default PageButton;
