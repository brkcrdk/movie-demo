import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieList } from "./store/serverTypes";
import { fetchMovies } from "./store/Movies/actions";
import Table from "./Components/Table/Table";

interface MoviesProps {
  moviesStore: {
    movies: MovieList;
  };
}

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies("top_rated"));
  }, [dispatch]);

  const data = useSelector((p: MoviesProps) => p.moviesStore.movies);

  const handleTop = useCallback(() => {
    dispatch(fetchMovies("top_rated"));
  }, [dispatch]);
  const handleUp = useCallback(() => {
    dispatch(fetchMovies("upcoming"));
  }, [dispatch]);
  const handlePopular = useCallback(() => {
    dispatch(fetchMovies("popular"));
  }, [dispatch]);

  return (
    <div className="App">
      <button onClick={handleTop}>Top Rated</button>
      <button onClick={handlePopular}>Popular</button>
      <button onClick={handleUp}>Upcoming</button>
      <Table
        movies={data.results}
        activePage={data.page}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default App;
