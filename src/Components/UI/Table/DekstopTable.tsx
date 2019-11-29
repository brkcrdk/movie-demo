import React from "react";
import { device } from "../../../utils";
import styled from "styled-components";
import { MovieInfo } from "../../../store/serverTypes";
import Filters from "../Filters/Filters";
import SortBtn from "../Sort/SortBtn";
interface Props {
  movies: MovieInfo[];
  activePage: number;
}

const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileTablet} {
    display: block;
  }
`;
const DekstopTable: React.FC<Props> = ({ movies, activePage }) => {
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
      <Filters />
      <SortBtn
        name="Popularity(Asc)"
        sort_option="popularity.asc"
        activePage={activePage}
      />
      <SortBtn
        name="Popularity(Desc)"
        sort_option="popularity.desc"
        activePage={activePage}
      />

      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Movie Title</th>
            <th>Release Date</th>
            <th>Short Description</th>
            <th>Popularity</th>
            <th>IMDB Average</th>
            <th>Votes</th>
          </tr>
          {renderTables}
        </tbody>
      </table>
    </Container>
  );
};

export default DekstopTable;
