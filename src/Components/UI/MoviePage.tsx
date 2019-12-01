import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/Movies/actions";
import { MovieList } from "../../store/serverTypes";
import Table from "./Table/Table";
interface Props {
  name: string;
}
interface MoviesState {
  moviesStore: {
    movies: MovieList;
  };
}
const MoviePage: React.FC<Props> = ({ name }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(name));
  }, [dispatch]);
  const movies = useSelector((state: MoviesState) => state.moviesStore.movies);

  return (
    <Table
      movies={movies.results}
      activePage={movies.page}
      totalPages={movies.total_pages}
      section={name}
    />
  );
};

export default MoviePage;
