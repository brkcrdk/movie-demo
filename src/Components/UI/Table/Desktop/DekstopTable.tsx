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
interface Props {
  movies: MovieInfo[];
}

const DekstopTable: React.FC<Props> = ({ movies }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const renderTables =
    movies !== undefined ? (
      movies.map((item, key) => (
        <Row
          key={key}
          onClick={() => {
            handleToggle(key);
          }}
        >
          <Col>
            <Title>
              <input type="radio" />
              <img src={`${imgUrl}/w500${item.poster_path}`} />
              <span>{item.title}</span>
            </Title>
          </Col>
          <Col>{item.release_date}</Col>
          <Col>{item.popularity}</Col>
          <Col>{item.vote_average}</Col>
          <Col>{item.vote_count}</Col>
          <Description toggle={activeIndex === key}>
            {item.overview}
          </Description>
          <Detail activeIndex={activeIndex} index={key} />
        </Row>
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
