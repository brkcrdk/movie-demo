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
  text-align: right;
  > img {
    width: 10em;
    border-radius: 0.6em;
    margin-right: 1em;
  }
`;
const InfoWrapper = styled.div``;
const GenreWrapper = styled.div`
  display: flex;
`;
const RuntimeAdult = styled.div`
  display: flex;
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
      <InfoWrapper>
        <p>{movieTitle}</p>
        <GenreWrapper>
          {genres && genres.map(genre => <span>{genre.name}</span>)}
        </GenreWrapper>
        <RuntimeAdult>
          <span>{adult ? "18+" : "7+"}</span>
          <span>{runTime}</span>
        </RuntimeAdult>
        <span>Vote Avg:{voteAvg}</span>
      </InfoWrapper>
    </Container>
  );
};

export default Top;
