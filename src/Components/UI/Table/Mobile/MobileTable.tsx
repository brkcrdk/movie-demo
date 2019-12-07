import React, { useState, useCallback } from "react";
import {
  Wrapper,
  Row,
  Header,
  Info,
  Container,
  ImageContainer,
  InfoContainer,
  Content
} from "./MobileTableStyle";
import { MovieInfo } from "../../../../store/serverTypes";
import Detail from "../../Detail/Detail";
import { useDispatch } from "react-redux";
import { fetchDetails } from "../../../../store/Detail/action";
import { toggleSlaytGrid } from "../../../../store/Toggles/action";
import { imgUrl } from "../../../../config";
interface Props {
  movies: MovieInfo[];
}

const MobileTable: React.FC<Props> = ({ movies }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const dispatch = useDispatch();
  const handleActive = useCallback(
    (index: number, id: number) => {
      if (activeIndex === index) {
        setActiveIndex(-1);
      } else {
        setActiveIndex(index);
      }
      dispatch(fetchDetails(id));
      dispatch(toggleSlaytGrid(-1));
    },
    [dispatch, activeIndex, setActiveIndex]
  );
  const handleClose = () => {
    setActiveIndex(-1);
  };
  const renderTables =
    movies !== undefined
      ? movies.map((movie, key) => (
          <Content>
            <button>Like</button>
            <Wrapper
              key={key}
              onClick={() => {
                handleActive(key, movie.id);
              }}
            >
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
            <Detail activeIndex={activeIndex} index={key} />
            {/* <button onClick={handleClose}>x</button> */}
          </Content>
        ))
      : "Loading..";
  return <Container>{renderTables}</Container>;
};

export default MobileTable;
