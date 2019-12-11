import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/Movies/actions";
import { toggleSection } from "../../store/Toggles/action";
import { MovieList } from "../../store/serverTypes";
import Table from "./Table/Table";
interface Props {
  name: string;
}
interface MoviesState {
  moviesStore: {
    movies: MovieList;
    isLoading: boolean;
  };
}
const MoviePage: React.FC<Props> = ({ name }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(name));
    dispatch(toggleSection(name));
  }, [dispatch, name]);
  const movies = useSelector((state: MoviesState) => state.moviesStore.movies);
  const isLoading = useSelector(
    (state: MoviesState) => state.moviesStore.isLoading
  );
  return (
    <Table
      movies={movies.results}
      activePage={movies.page}
      totalPages={movies.total_pages}
      section={name}
      isLoading={isLoading}
    />
  );
};

export default MoviePage;
