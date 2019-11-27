import React, { useCallback, useState } from "react";
import { fetchDiscover } from "../../../store/Discover/action";
import { fetchMovies } from "../../../store/Movies/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Next, Prev } from "./Style";
interface Props {
  totalPages: number;
  section: string;
  activePage: number;
}

interface FilterState {
  discoverFilter: {
    tags: {
      name: string;
      id: number;
    }[];
  };
}
const Pagination: React.FC<Props> = ({ totalPages, section, activePage }) => {
  const filter = useSelector((state: FilterState) => state.discoverFilter.tags);
  const dispatch = useDispatch();

  const pageNumbers: number[] = [];
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(10);
  const [pageBound] = useState(10);
  const [disabled, setDisabled] = useState(false);
  if (totalPages !== undefined) {
    for (let i = 1; i < totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  const renderPageNumbers = pageNumbers
    .filter((number, index) => {
      return number > lowerBound && number < upperBound + 1;
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
          handlePageNumber(number);
        }}
      >
        {number}
      </button>
    ));

  const handlePageNumber = useCallback(
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

  const handleNext = () => {
    if (activePage + 1 > upperBound) {
      setUpperBound(upperBound + pageBound);
      setLowerBound(lowerBound + pageBound);
    }
    if (activePage !== pageNumbers.length) {
      handlePageNumber(activePage + 1);
    }
  };
  const handlePrev = () => {
    if ((activePage - 1) % pageBound === 0) {
      setUpperBound(upperBound - pageBound);
      setLowerBound(lowerBound - pageBound);
    }
    if (activePage > 1) {
      handlePageNumber(activePage - 1);
    }
  };

  return (
    <Container>
      <Prev onClick={handlePrev} disabled={activePage === 1}>
        Prev
      </Prev>
      {renderPageNumbers}
      <Next onClick={handleNext} disabled={activePage === totalPages}>
        Next
      </Next>
    </Container>
  );
};

export default Pagination;
