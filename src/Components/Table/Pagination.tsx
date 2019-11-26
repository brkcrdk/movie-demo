import React, { useCallback } from "react";
import { fetchDiscover } from "../../store/Discover/action";
import { fetchMovies } from "../../store/Movies/actions";
import { useDispatch } from "react-redux";

interface Props {
  totalPages: number;
}

const Pagination: React.FC<Props> = ({ totalPages }) => {
  const pageNumbers: number[] = [];
  if (totalPages !== undefined) {
    for (let i = 1; i < totalPages; i++) {
      pageNumbers.push(i);
    }
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
      {pageNumbers.map((number, i) => (
        <a
          key={i}
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
  );
};

export default Pagination;
