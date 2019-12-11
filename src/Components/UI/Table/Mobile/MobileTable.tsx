import React, { useState, useCallback } from "react";
import {
  Wrapper,
  Row,
  Header,
  Info,
  Container,
  ImageContainer,
  InfoContainer,
  DetailContainer,
  Content
} from "./MobileTableStyle";
import { MovieInfo } from "../../../../store/serverTypes";
import Detail from "../Detail/Detail";
import { useDispatch } from "react-redux";
import { fetchDetails } from "../../../../store/Detail/action";
import { toggleSlaytGrid } from "../../../../store/Toggles/action";
import { imgUrl } from "../../../../config";
import { Favourite, ToggleIcons } from "../../../UI/Icons/Icons";
import Loader from "../../../UI/Loader";
interface Props {
  movies: MovieInfo[];
  isLoading: boolean;
}

const MobileTable: React.FC<Props> = ({ movies, isLoading }) => {
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
    movies &&
    movies.map((movie, index) => (
      <Content key={index}>
        <Favourite movie={movie} />
        <Wrapper
          onClick={() => {
            handleActive(index, movie.id);
          }}
        >
          <ImageContainer>
            <img
              src={`${imgUrl}/w500/${movie.poster_path}`}
              alt={`img-${movie.title}`}
            />
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
        <DetailContainer toggle={activeIndex === index}>
          <Detail activeIndex={activeIndex} index={index} isMobile={true} />
        </DetailContainer>
        <ToggleIcons
          icon={activeIndex !== index ? "chevron-down" : "chevron-up"}
          onClick={handleClose}
        />
      </Content>
    ));
  return <Container>{isLoading ? <Loader /> : renderTables}</Container>;
};

export default MobileTable;
