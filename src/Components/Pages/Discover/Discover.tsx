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
interface FilterState {
  discoverFilter: {
    tags: {
      name: string;
      id: number;
    }[];
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
  useEffect(() => {
    const ids = filters.map(item => item.id);
    dispatch(fetchDiscover(...ids));
    console.log(ids);
  }, [dispatch, filters]);

  return (
    <div>
      {filters.map((item, key) => (
        <p key={key}>{item.name}</p>
      ))}
      <Table
        movies={movies.results}
        activePage={movies.page}
        totalPages={movies.total_pages}
      />
    </div>
  );
};

export default Discover;