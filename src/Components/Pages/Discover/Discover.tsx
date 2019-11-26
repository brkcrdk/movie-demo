import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscover } from "../../../store/Discover/action";
import Table from "../../Table/Table";
import { MovieList } from "../../../store/serverTypes";
interface Props {}
interface DiscoverState {
  discoverStore: {
    movies: MovieList;
  };
}
const Discover: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiscover());
  }, [dispatch]);
  const movies = useSelector(
    (state: DiscoverState) => state.discoverStore.movies
  );
  return (
    <div>
      <Table
        movies={movies.results}
        activePage={movies.page}
        totalPages={movies.total_pages}
      />
    </div>
  );
};

export default Discover;
