import React, { useRef } from "react";
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
  const tableRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={tableRef} style={{ height: "75vh", overflow: "auto" }}>
      <MobileTable movies={movies} />
      <DekstopTable movies={movies} />
      <Pagination
        ref={tableRef}
        section={section}
        totalPages={totalPages}
        activePage={activePage}
      />
    </div>
  );
};

export default Table;
