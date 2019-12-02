import React from "react";
import { device } from "../../../../utils";
import styled from "styled-components";
import { MovieInfo } from "../../../../store/serverTypes";
interface Props {
  movies: MovieInfo[];
}

const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileTablet} {
    display: block;
  }
`;
const DekstopTable: React.FC<Props> = ({ movies }) => {
  const renderTables =
    movies !== undefined ? (
      movies.map((item, key) => (
        <tr key={key}>
          <th>{item.title}</th>
          <th>{item.release_date}</th>
          <th>{item.overview}</th>
          <th>{item.popularity}</th>
          <th>{item.vote_average}</th>
          <th>{item.vote_count}</th>
        </tr>
      ))
    ) : (
      <tr>
        <th>Loading..</th>
      </tr>
    );
  return (
    <Container>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Movie title</th>
            <th>Release Date</th>
            <th>Short Description</th>
            <th>Popularity</th>
            <th>IMDB Average</th>
            <th>Votes </th>
          </tr>
          {renderTables}
        </tbody>
      </table>
    </Container>
  );
};

export default DekstopTable;
