import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "./store/Detail/action";
import { IDetail } from "./store/serverTypes";
import Table from "./Components/Table/Table";
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

  const renderActors =
    movie.credits !== undefined
      ? movie.credits.cast.map((cast, index) => (
          <li key={index}>{cast.name}</li>
        ))
      : "";
  return (
    <div className="App">
      <Table />
    </div>
  );
};

export default App;
