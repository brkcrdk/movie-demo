import React from "react";
import styled from "styled-components";
import { imgUrl } from "../../../../config";
import { IGenre } from "../../../../store/serverTypes";
interface Props {
  posterPath: string | null;
  movieTitle: string;
  genres: IGenre[];
  adult: boolean;
  voteAvg: number;
  runTime: number;
}
const Container = styled.div`
  display: flex;

  > img {
    width: 6em;
    border-radius: 0.6em;
  }
  > div {
    display: grid;
  }
`;
const Top: React.FC<Props> = ({
  posterPath,
  genres,
  movieTitle,
  adult,
  voteAvg,
  runTime
}) => {
  return (
    <Container>
      <img src={`${imgUrl}/w300${posterPath}`} />
      <div>
        <p>{movieTitle}</p>
        {genres && genres.map(genre => <span>{genre.name}</span>)}
        <span>{adult ? "18+" : "7+"}</span>
        <span>{runTime}</span>

        <span>Vote Avg:{voteAvg}</span>
      </div>
    </Container>
  );
};

export default Top;
