import React, { useEffect } from "react";
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
    dispatch(fetchMovies("popular"));
  }, [dispatch]);
  const results = useSelector((p: MoviesProps) => p.moviesStore.movies.results);
  console.log(results);
  return (
    <div className="App">
      <Table />
    </div>
  );
};

export default App;
