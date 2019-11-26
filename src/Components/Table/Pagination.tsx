import React, { useCallback } from "react";
import { fetchDiscover } from "../../store/Discover/action";
import { fetchMovies } from "../../store/Movies/actions";
import { useDispatch } from "react-redux";

interface Props {
  totalPages: number;
  section: string;
}

const Pagination: React.FC<Props> = ({ totalPages, section }) => {
  const pageNumbers: number[] = [];
  if (totalPages !== undefined) {
    for (let i = 1; i < totalPages; i++) {
      pageNumbers.push(i);
    }
  }
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (page: number) => {
      if (section === "discover") {
        dispatch(fetchDiscover(page));
      } else {
        dispatch(fetchMovies(section, page));
      }
    },
    [dispatch]
  );
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden"
      }}
    >
      {pageNumbers.map((page, i) => (
        <button
          key={i}
          style={{
            border: "none",
            background: "transparent",
            margin: "0.3em",
            cursor: "pointer"
          }}
          onClick={() => {
            handleClick(page);
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
