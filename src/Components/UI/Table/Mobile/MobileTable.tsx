import React from "react";
import {
  Wrapper,
  Row,
  Header,
  Info,
  Splitter,
  Container,
  ImageContainer,
  InfoContainer
} from "./MobileTableStyle";
import { MovieInfo } from "../../../../store/serverTypes";
import { imgUrl } from "../../../../config";
interface Props {
  movies: MovieInfo[];
}

const MobileTable: React.FC<Props> = ({ movies }) => {
  const renderTables =
    movies !== undefined
      ? movies.map((movie, key) => (
          <Wrapper key={key}>
            <button>Like</button>
            <ImageContainer>
              <img src={`${imgUrl}/w500/${movie.poster_path}`} />
            </ImageContainer>
            <InfoContainer>
              <Row>
                <Header>Movie Title</Header>
                <Info>: {movie.title}</Info>
              </Row>
              <Row>
                <Header>Release Date</Header>
                <Info>: {movie.release_date}</Info>
              </Row>
              <Row>
                <Header>Popularity</Header>
                <Info>: {movie.popularity}</Info>
              </Row>
              <Row>
                <Header>IMDB Average</Header>
                <Info>: {movie.vote_average}</Info>
              </Row>
              <Row>
                <Header>Votes</Header>
                <Info>: {movie.vote_count}</Info>
              </Row>
            </InfoContainer>
          </Wrapper>
        ))
      : "Loading..";
  return <Container>{renderTables}</Container>;
};

export default MobileTable;
