import React, { useCallback, useState } from "react";
import { fetchDiscover } from "../../store/Discover/action";
import { fetchMovies } from "../../store/Movies/actions";
import { useDispatch, useSelector } from "react-redux";
interface Props {
  totalPages: number;
  section: string;
}
interface FilterState {
  discoverFilter: {
    tags: {
      name: string;
      id: number;
    }[];
  };
}
const Pagination: React.FC<Props> = ({ totalPages, section }) => {
  const pageNumbers: number[] = [];
  const [upperBound, setUpperBound] = useState(0);
  const [lowerBound, setLowerBound] = useState(10);
  const [pageBound] = useState(10);

  if (totalPages !== undefined) {
    for (let i = 1; i < totalPages; i++) {
      pageNumbers.push(i);
    }
  }
  const renderPageNumbers = pageNumbers
    .filter((number, index) => {
      return number > upperBound && number < lowerBound + 1;
    })
    .map((number, index) => (
      <button
        key={index}
        style={{
          border: "none",
          background: "transparent",
          margin: "0.3em",
          cursor: "pointer"
        }}
        onClick={() => {
          handleClick(number);
        }}
      >
        {number}
      </button>
    ));

  const filter = useSelector((state: FilterState) => state.discoverFilter.tags);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (page: number) => {
      if (section === "discover") {
        const genreIds = filter.map(genre => genre.id);
        dispatch(fetchDiscover(page, ...genreIds));
      } else {
        dispatch(fetchMovies(section, page));
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [dispatch, filter, section]
  );
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden"
      }}
    >
      {renderPageNumbers}
      {/* {pageNumbers.map((page, i) => (
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
      ))} */}
    </div>
  );
};

export default Pagination;
