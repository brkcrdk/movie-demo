import React, { useEffect } from "react";
import { fetchGenres } from "../../../store/Genres/action";
import { useDispatch } from "react-redux";
import Genres from "./Filters/Genres/Genres";
import Sort from "../Main/Filters/Sort/Sort";
interface Props {
  activePage: number;
}

const Filters: React.FC<Props> = ({ activePage }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div>
      <Genres />
      <Sort activePage={activePage} />
    </div>
  );
};

export default Filters;
