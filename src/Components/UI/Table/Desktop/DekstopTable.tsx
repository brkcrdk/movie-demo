import React from "react";
import { MovieInfo } from "../../../../store/serverTypes";
import {
  Container,
  Table,
  Row,
  Col,
  Body,
  Head,
  Description
} from "./DesktopTableStyle";
interface Props {
  movies: MovieInfo[];
}

const DekstopTable: React.FC<Props> = ({ movies }) => {
  const renderTables =
    movies !== undefined ? (
      movies.map((item, key) => (
        <Row key={key}>
          <Col>{item.title}</Col>
          <Col>{item.release_date}</Col>
          <Col>{item.popularity}</Col>
          <Col>{item.vote_average}</Col>
          <Col>{item.vote_count}</Col>
          <Description>{item.overview}</Description>
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