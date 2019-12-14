import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MovieInfo } from "../../../store/serverTypes";
import { imgUrl } from "../../../config";

interface Props {
  onClick?: () => void;
  results: MovieInfo[];
}

const SearchResult: React.FC<Props> = ({ results, onClick }) => {
  const location = useLocation();

  const renderResults =
    results &&
    results
      .filter(
        (result) =>
          result.backdrop_path !== null && result.backdrop_path !== undefined
      )
      .map((result, index) => (
        <Link
          key={index}
          onClick={onClick}
          to={{
            pathname: `movie/${result.id}`,
            state: { background: location }
          }}>
          <li>
            <div>
              <img
                src={`${imgUrl}/w300${result.backdrop_path}`}
                alt={`img-${result.title}`}
              />
              <span>{result.title}</span>
            </div>
          </li>
        </Link>
      ));
  return <>{renderResults}</>;
};

export default SearchResult;
