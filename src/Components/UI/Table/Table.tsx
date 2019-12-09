import React from "react";
import { MovieInfo } from "../../../store/serverTypes";
import Pagination from "../Pagination/Pagination";
import MobileTable from "./Mobile/MobileTable";
import DekstopTable from "./Desktop/DekstopTable";
interface Props {
  section: string;
  movies: MovieInfo[];
  activePage: number;
  totalPages: number;
  isLoading: boolean;
}

const Table: React.FC<Props> = ({
  movies,
  totalPages,
  section,
  activePage,
  isLoading
}) => {
  const filterNulls =
    movies &&
    movies.filter(movie => {
      return movie.backdrop_path !== null && movie.poster_path !== null;
    });
  return (
    <div>
      <MobileTable movies={filterNulls} isLoading={isLoading} />
      <DekstopTable
        movies={filterNulls}
        section={section}
        isLoading={isLoading}
      />
      <Pagination
        section={section}
        totalPages={totalPages}
        activePage={activePage}
      />
    </div>
  );
};

export default Table;
