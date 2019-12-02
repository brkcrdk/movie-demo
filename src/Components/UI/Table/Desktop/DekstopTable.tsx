import React, { useState } from "react";
import { MovieInfo } from "../../../../store/serverTypes";
import {
  Container,
  Table,
  Row,
  Col,
  Body,
  Head,
  Description,
  Title
} from "./DesktopTableStyle";
import Detail from "../Detail/Detail";
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
    movies !== undefined ? (
      movies.map((movie, key) => (
        <>
          <Row
            key={key}
            onClick={() => {
              handleToggle(key, movie.id);
            }}
          >
            <Col>
              <Title>
                <input type="radio" />
                <img src={`${imgUrl}/w500${movie.poster_path}`} />
                <span>{movie.title}</span>
              </Title>
            </Col>
            <Col>{movie.release_date}</Col>
            <Col>{movie.popularity}</Col>
            <Col>{movie.vote_average}</Col>
            <Col>{movie.vote_count}</Col>
            <Description toggle={activeIndex === key}>
              {movie.overview}
            </Description>
          </Row>
          <Detail activeIndex={activeIndex} index={key} />
        </>
      ))
    ) : (
      <Row>
        <Col>Loading..</Col>
      </Row>
    );
  return (
    <Container>
      <Table>
        <Head>
          <Row>
            <Col>Movie title</Col>
            <Col>Release Date</Col>
            <Col>Popularity</Col>
            <Col>IMDB Average</Col>
            <Col>Votes </Col>
            <Col>Short Description</Col>
          </Row>
        </Head>
        <Body>{renderTables}</Body>
      </Table>
    </Container>
  );
};

export default DekstopTable;
