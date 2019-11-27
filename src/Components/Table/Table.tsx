import React from "react";
import { MovieInfo } from "../../store/serverTypes";
import Pagination from "./Pagination/Pagination";

interface Props {
  section: string;
  movies: MovieInfo[];
  activePage: number;
  totalPages: number;
}

const Table: React.FC<Props> = ({
  movies,
  totalPages,
  section,
  activePage
}) => {
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
    <div>
      {activePage}
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
      <Pagination
        section={section}
        totalPages={totalPages}
        activePage={activePage}
      />
    </div>
  );
};

export default Table;
