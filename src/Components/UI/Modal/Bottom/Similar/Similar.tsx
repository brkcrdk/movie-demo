import React from "react";
import { Container } from "../SlideContainer";
import { MovieInfo } from "../../../../../store/serverTypes";
import { imgUrl } from "../../../../../config";

interface Props {
  similar: MovieInfo[];
}

const Similar: React.FC<Props> = ({ similar }) => {
  const renderSimilar =
    similar &&
    similar
      .filter((movie) => movie.poster_path !== null)
      .map((movie, index) => (
        <div key={index}>
          <img
            src={`${imgUrl}/w185/${movie.poster_path}`}
            alt={`poster-${movie.title}`}
          />
          <span>
            <strong>{movie.title}</strong>
          </span>
        </div>
      ));
  return (
    <Container>
      {similar.length > 0 ? renderSimilar : <p>No similar movie found</p>}
    </Container>
  );
};

export default Similar;
