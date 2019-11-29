import React from "react";
import { Link } from "react-router-dom";
interface Props {
  route: string;
  innerText: string;
}

const PageButton: React.FC<Props> = ({ route, innerText }) => {
  return <Link to={`/movies/${route}`}>{innerText}</Link>;
};

export default PageButton;
