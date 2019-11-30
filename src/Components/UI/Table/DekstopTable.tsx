import React from "react";
import { device } from "../../../utils";
import styled from "styled-components";
import { MovieInfo } from "../../../store/serverTypes";
import Filters from "../Genres/Filters/Filters";
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
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>
              <SortBtn
                name="Movie Title"
                sort="original_title"
                activePage={activePage}
              />
            </th>
            <th>
              <SortBtn
                name="Release Date"
                sort="primary_release_date"
                activePage={activePage}
              />
            </th>
            <th>Short Description</th>
            <th>
              <SortBtn
                name="Popularity"
                sort="popularity"
                activePage={activePage}
              />
            </th>
            <th>
              <SortBtn
                name="IMDB Average"
                sort="vote_average"
                activePage={activePage}
              />
            </th>
            <th>
              <SortBtn name="Votes" sort="vote_count" activePage={activePage} />
            </th>
          </tr>
          {renderTables}
        </tbody>
      </table>
    </Container>
  );
};

export default DekstopTable;
