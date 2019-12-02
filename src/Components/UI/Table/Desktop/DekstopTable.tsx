import React from "react";
import { MovieInfo } from "../../../../store/serverTypes";
import { Container, Table, Row, Col } from "./DesktopTableStyle";
interface Props {
  movies: MovieInfo[];
}

const DekstopTable: React.FC<Props> = ({ movies }) => {
  const renderTables =
    movies !== undefined ? (
      movies.map((item, key) => (
        <tr key={key}>
          <th>{item.title}</th>
          <th>{item.release_date}</th>
          <th>{item.popularity}</th>
          <th>{item.vote_average}</th>
          <th>{item.vote_count}</th>
          <th>{item.overview}</th>
        </tr>
      ))
    ) : (
      <tr>
        <th>Loading..</th>
      </tr>
    );
  return (
    <Container>
      <Table>
        <thead>
          <Row>
            <th>Movie title</th>
            <th>Release Date</th>
            <th>Popularity</th>
            <th>IMDB Average</th>
            <th>Votes </th>
            <th>Short Description</th>
          </Row>
        </thead>
        <tbody>{renderTables}</tbody>
      </Table>
    </Container>
  );
};

export default DekstopTable;
