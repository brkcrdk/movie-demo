import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../../store/Movies/actions";
import { MovieList } from "../../../../store/serverTypes";
import Table from "../../../Table/Table";
interface Props {}
interface MoviesState {
  moviesStore: {
    movies: MovieList;
  };
}
const NowPlaying: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies("now_playing"));
  }, [dispatch]);
  const movies = useSelector((state: MoviesState) => state.moviesStore.movies);
  return (
    <Table
      movies={movies.results}
      activePage={movies.page}
      totalPages={movies.total_pages}
    />
  );
};

export default NowPlaying;
