import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "./store/Detail/action";
import { IDetail } from "./store/serverTypes";

interface DetailProps {
  detail: {
    movie: IDetail;
  };
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(475550));
  }, [dispatch]);
  const movie = useSelector((state: DetailProps) => state.detail.movie);
  console.log(movie);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Details</h3>
        <p>{movie.original_title}</p>
      </header>
    </div>
  );
};

export default App;
