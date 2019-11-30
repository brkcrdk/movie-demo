import React, { useEffect } from "react";
import { fetchGenres } from "../../../store/Genres/action";
import Genres from "./Filters/Genres/Genres";
import { useDispatch } from "react-redux";
interface Props {}

const Filters: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <div>
      <Genres />
    </div>
  );
};

export default Filters;
