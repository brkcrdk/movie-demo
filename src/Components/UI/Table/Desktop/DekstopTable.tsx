import React, { useState } from "react";
import { MovieInfo } from "../../../../store/serverTypes";
import {
  Container,
  Header,
  Content,
  Row,
  Col,
  Wrapper
} from "./DesktopTableStyle";
import Detail from "../Detail/Detail";
import Overview from "./Overview";
import Title from "./Title";
import { imgUrl } from "../../../../config";
import { useDispatch } from "react-redux";
import { fetchDetails } from "../../../../store/Detail/action";

interface Props {
  movies: MovieInfo[];
}

const DekstopTable: React.FC<Props> = ({ movies }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const dispatch = useDispatch();

  const handleToggle = (index: number, id: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
    dispatch(fetchDetails(id));
  };

  const renderTables =
    movies &&
    movies.map((movie, key) => {
      return (
        <Wrapper key={key} toggle={activeIndex === key}>
          <input type="radio" />
          <Row
            onClick={() => {
              handleToggle(key, movie.id);
            }}
          >
            <Col>
              <Title imgPath={movie.poster_path} movieName={movie.title} />
            </Col>
            <Col>{movie.release_date}</Col>
            <Col>{movie.popularity}</Col>
            <Col>{movie.vote_average}</Col>
            <Col>{movie.vote_count}</Col>
            <Overview text={movie.overview} />
          </Row>
          <Detail activeIndex={activeIndex} index={key} />
        </Wrapper>
      );
    });
  return (
    <Container>
      <Header>
        <h4>Movie Title</h4>
        <h4>Release Date</h4>
        <h4>Popularity</h4>
        <h4>IMDB Average</h4>
        <h4>Votes</h4>
        <h4>Overview</h4>
      </Header>
      <Content>{renderTables}</Content>
    </Container>
  );
};

export default DekstopTable;
