import React from "react";
import styled from "styled-components";
import { imgUrl } from "../../../../config";
import { IGenre } from "../../../../store/serverTypes";
import { ToggleIcons } from "../../Icons/Icons";
import { fonts } from "../../../../utils";
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
  font-family: ${fonts.aBeeZee};

  > img {
    width: 10em;
    border-radius: 0.6em;
    margin-right: 1em;
  }
`;
const InfoWrapper = styled.div`
  display: grid;
  align-items: flex-end;
`;
const GenreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  > span {
    margin: 0.1em;
  }
`;
const RuntimeAdult = styled.div`
  display: flex;
  justify-content: flex-end;
  span {
    padding-left: 1em;
  }
`;
const Vote = styled.span`
  font-size: 1.3em;
  button {
    color: orange;
    font-size: 2em;
  }
`;
const Title = styled.p`
  font-size: 1.5em;
  font-weight: 900;
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
        <Title>{movieTitle}</Title>
        <RuntimeAdult>
          <span>{adult ? "18+" : "7+"}</span>
          <span>{runTime}</span>
        </RuntimeAdult>
        <GenreWrapper>
          {genres && genres.map(genre => <span>{genre.name}</span>)}
        </GenreWrapper>
        <Vote>
          <ToggleIcons iconStyle="b" icon="imdb" />
          {voteAvg}
        </Vote>
      </InfoWrapper>
    </Container>
  );
};

export default Top;
