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
  if (totalPages !== undefined) {
    for (let i = 1; i < totalPages; i++) {
      pageNumbers.push(i);
    }
  }
  const [upperBound, setUpperBound] = useState(0);
  const [lowerBound, setLowerBound] = useState(5);
  const [pageBound] = useState(5);
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
