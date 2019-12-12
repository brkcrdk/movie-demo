import React from "react";
import styled from "styled-components";
import { colours } from "../../../../../utils";
import { MovieInfo } from "../../../../../store/serverTypes";
import { imgUrl } from "../../../../../config";

interface Props {
  similar: MovieInfo[];
}
const Container = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
  text-align: center;
  div {
    margin: 0 0.5em;
    img {
      width: 7em;
      max-height: 7em;
      object-fit: cover;
      box-shadow: ${colours.boxShadow};
    }
  }
  span {
    font-size: 0.9em;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
  }
`;
const Similar: React.FC<Props> = ({ similar }) => {
  const renderSimilar =
    similar &&
    similar
      .filter(movie => movie.poster_path !== null)
      .map((movie, index) => (
        <div>
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