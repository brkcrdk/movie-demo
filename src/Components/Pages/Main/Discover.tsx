import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscover } from "../../../store/Discover/action";
import { MovieList } from "../../../store/serverTypes";
import Table from "../../UI/Table/Table";
interface Props {}
interface DiscoverState {
  discoverStore: {
    movies: MovieList;
  };
}
interface FilterState {
  discoverFilter: {
    tags: {
      name: string;
      id: number;
    }[];
    sortBy: string;
  };
}
const Discover: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: DiscoverState) => state.discoverStore.movies
  );
  const filters = useSelector(
    (state: FilterState) => state.discoverFilter.tags
  );
  const sort = useSelector((state: FilterState) => state.discoverFilter.sortBy);
  useEffect(() => {
    const ids = filters.map(item => item.id);
    dispatch(fetchDiscover(1, sort, ...ids));
  }, [dispatch, filters, sort]);

  return (
    <div>
      <Table
        movies={movies.results}
        activePage={movies.page}
        totalPages={movies.total_pages}
        section="discover"
      />
    </div>
  );
};

export default Discover;
