import React from "react";
import styled from "styled-components";
import { device, colours } from "../../../utils";
import { MovieInfo } from "../../../store/serverTypes";
import Filters from "../Filters/Filters";
interface Props {
  movies: MovieInfo[];
  activePage: number;
}

const Container = styled.div`
  @media ${device.mobileS} {
    display: block;
    padding: 0.5em;
  }
  @media ${device.mobileTablet} {
    display: none;
  }
`;
const TableWrapper = styled.div`
  padding: 0.5em 1em;
  border: 0.3px solid lightgrey;
  margin: 1em 0;
  border-radius: 0.3em;
  box-shadow: ${colours.boxShadow};
`;
const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
`;
const TableHeader = styled.p`
  padding-left: 2em;
  margin: 0.3em;
`;
const TableInfo = styled.p`
  margin: 0.3em;
`;
const Splitter = styled.hr`
  border: 0.5px solid lightgrey;
`;

const MobileTable: React.FC<Props> = ({ movies }) => {
  const renderTables =
    movies &&
    movies.map((movie, key) => (
      <TableWrapper>
        <TableRow>
          <TableHeader>Movie Title</TableHeader>
          <TableInfo>{movie.title}</TableInfo>
        </TableRow>
        <Splitter />
        <TableRow>
          <TableHeader>Release Date</TableHeader>
          <TableInfo>{movie.release_date}</TableInfo>
        </TableRow>
        <Splitter />
        <TableRow>
          <TableHeader>Popularity</TableHeader>
          <TableInfo>{movie.popularity}</TableInfo>
        </TableRow>
        <Splitter />
        <TableRow>
          <TableHeader>IMDB Average</TableHeader>
          <TableInfo>{movie.vote_average}</TableInfo>
        </TableRow>
        <Splitter />
        <TableRow>
          <TableHeader>Votes</TableHeader>
          <TableInfo>{movie.vote_count}</TableInfo>
        </TableRow>
      </TableWrapper>
    ));
  return (
    <Container>
      <Filters />
      {renderTables}
    </Container>
  );
};

export default MobileTable;
