import React, { useEffect } from "react";
import { Genre } from "../../../store/serverTypes";
import { fetchGenres } from "../../../store/Genres/action";
import Selectbox from "../../UI/Selectbox/Selectbox";
import { addTag } from "../../../store/DiscoverFilter/action";
import { useSelector, useDispatch } from "react-redux";
interface Props {}
interface GenreProps {
  genreStore: {
    genre: {
      genres: Genre[];
    };
  };
}
const Filters: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres);
  }, []);
  const genres = useSelector(
    (state: GenreProps) => state.genreStore.genre.genres
  );
  return <Selectbox options={genres} />;
};

export default Filters;
