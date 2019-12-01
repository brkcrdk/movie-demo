import React from "react";
import { Link } from "react-router-dom";
interface Props {
  route: string;
  innerText: string;
}

const PageButton: React.FC<Props> = ({ route, innerText }) => {
  const renderLink =
    route === "/" ? (
      <Link to="/">{innerText}</Link>
    ) : (
      <Link to={`/movies${route}`}>{innerText}</Link>
    );
  return renderLink;
};

export default PageButton;
