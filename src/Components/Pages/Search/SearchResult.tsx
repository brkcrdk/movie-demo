import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MovieInfo } from "../../../store/serverTypes";

interface Props {
  onClick?: () => void;
  results: MovieInfo[];
}

const SearchResult: React.FC<Props> = ({ results, onClick }) => {
  const renderResults =
    results &&
    results
      .filter(result => result.backdrop_path !== null)
      .map((result, index) => (
        <Link
          key={index}
          onClick={onClick}
          to={{
            pathname: `movie/${result.id}`,
            state: { background: location }
          }}
        >
          <li></li>
        </Link>
      ));
  return <div></div>;
};

export default SearchResult;
