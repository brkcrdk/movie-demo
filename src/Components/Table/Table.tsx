import React from "react";
import { MovieInfo } from "../../store/serverTypes";

interface Props {
  movies: MovieInfo[];
  activePage: number;
  totalPages: number;
}

const Table: React.FC<Props> = ({ movies, totalPages }) => {
  const renderTables =
    movies !== undefined
      ? movies.map((item, key) => (
          <tr key={key}>
            <th>{item.title}</th>
            <th>{item.release_date}</th>
            <th>{item.overview}</th>
            <th>{item.popularity}</th>
            <th>{item.vote_average}</th>
            <th>{item.vote_count}</th>
          </tr>
        ))
      : "";

  const pageNumbers: number[] = [];
  if (totalPages !== undefined) {
    for (let i = 1; i < totalPages; i++) {
      pageNumbers.push(i);
    }
  }
  return (
    <div>
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
      <div style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
        {pageNumbers.map((number, i) => (
          <a
            style={{ margin: "0.3em" }}
            href="?#"
            onClick={() => {
              alert(number);
            }}
          >
            {number}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Table;
