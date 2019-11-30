import React, { useEffect } from "react";
import { fetchGenres } from "../../../store/Genres/action";
import Selectbox from "../../UI/Genres/Genres";
import { useDispatch } from "react-redux";
interface Props {}

const Filters: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <div>
      <Selectbox />
    </div>
  );
};

export default Filters;
