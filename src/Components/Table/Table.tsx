import React from "react";
import { MovieInfo } from "../../store/serverTypes";

interface Props {
  movies: MovieInfo[];
  activePage: number;
  totalPages: number;
}

const Table: React.FC<Props> = ({ movies }) => {
  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <th>Movie Title</th>
          <th>Release Date</th>
          <th>Short Description</th>
          <th>Time</th>
          <th>IMDB Average</th>
          <th>Votes</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
