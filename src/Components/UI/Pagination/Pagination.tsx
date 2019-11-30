import React, { useCallback, useState } from "react";
import { fetchDiscover } from "../../../store/Discover/action";
import { fetchMovies } from "../../../store/Movies/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Next, Prev, Number } from "./PaginationStyle";
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
  const [pageBound] = useState(5);
  if (totalPages !== undefined) {
    for (let i = 1; i < totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  const handlePageNumber = useCallback(
    (page: number) => {
      if (section === "discover") {
        const genreIds = filter.map(genre => genre.id);
        dispatch(fetchDiscover(page, "", ...genreIds));
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

  const renderPageNumbers = pageNumbers
    .filter(number => {
      return number > lowerBound && number < upperBound + 1;
    })
    .map((number, index) => (
      <Number
        key={index}
        onClick={() => {
          handlePageNumber(number);
        }}
      >
        {number}
      </Number>
    ));

  return (
    <Container>
      <Prev onClick={handlePrev} disabled={activePage === 1}>
        &#60;
      </Prev>
      {renderPageNumbers}
      <Next onClick={handleNext} disabled={activePage === totalPages}>
        &#62;
      </Next>
    </Container>
  );
};

export default Pagination;
