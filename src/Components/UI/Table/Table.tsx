import React from "react";
import { MovieInfo } from "../../../store/serverTypes";
import Pagination from "../Pagination/Pagination";

import MobileTable from "./MobileTable";
import DekstopTable from "./Desktop/DekstopTable";

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
  return (
    <div>
      <MobileTable movies={movies} />
      <DekstopTable movies={movies} />
      <Pagination
        section={section}
        totalPages={totalPages}
        activePage={activePage}
      />
    </div>
  );
};

export default Table;
