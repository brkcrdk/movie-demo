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
    dispatch(fetchMovies("top_rated"));
  }, [dispatch]);
  const data = useSelector((p: MoviesProps) => p.moviesStore.movies);

  return (
    <div className="App">
      <Table
        movies={data.results}
        activePage={data.page}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default App;
