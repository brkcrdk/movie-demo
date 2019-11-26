import React, { useCallback } from "react";
import { fetchDiscover } from "../../store/Discover/action";
import { fetchMovies } from "../../store/Movies/actions";
import { useDispatch } from "react-redux";

interface Props {
  totalPages: number;
  section: string;
}

const Pagination: React.FC<Props> = ({ totalPages }) => {
  const pageNumbers: number[] = [];
  if (totalPages !== undefined) {
    for (let i = 1; i < totalPages; i++) {
      pageNumbers.push(i);
    }
  }
  const handleClick = () => {};
  return (
    <div style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
      {pageNumbers.map((number, i) => (
        <button
          key={i}
          style={{ border: "none", background: "transparent", margin: "0.3em" }}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
