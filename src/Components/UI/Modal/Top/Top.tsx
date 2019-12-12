import React from "react";
import { imgUrl } from "../../../../config";
import { IGenre } from "../../../../store/serverTypes";
import { ToggleIcons } from "../../Icons/Icons";
import {
  Container,
  InfoWrapper,
  Title,
  RuntimeAdult,
  GenreWrapper,
  VotePopularity
} from "./TopStyle";

interface Props {
  posterPath: string | null;
  movieTitle: string;
  genres: IGenre[];
  adult: boolean;
  voteAvg: number;
  runTime: number;
  popularity: number;
}

const Top: React.FC<Props> = ({
  posterPath,
  genres,
  movieTitle,
  adult,
  voteAvg,
  runTime,
  popularity
}) => {
  return (
    <Container>
      <img src={`${imgUrl}/w300${posterPath}`} />
      <InfoWrapper>
        <Title>{movieTitle}</Title>
        <RuntimeAdult>
          <span>{adult ? "18+" : "7+"}</span>
          <span>{runTime}</span>
        </RuntimeAdult>
        <GenreWrapper>
          {genres && genres.map(genre => <span>{genre.name}</span>)}
        </GenreWrapper>
        <VotePopularity>
          <span>
            <ToggleIcons icon="heart" />
            {popularity}
          </span>
          <span>
            <ToggleIcons iconStyle="b" icon="imdb" />
            {voteAvg}
          </span>
        </VotePopularity>
      </InfoWrapper>
    </Container>
  );
};

export default Top;
