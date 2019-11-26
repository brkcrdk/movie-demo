import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../../store/Genres/action";
import { fetchDiscover } from "../../../store/Discover/action";
import { Genre } from "../../../store/serverTypes";
interface Props {}
interface GenreProps {
  genreStore: {
    genre: {
      genres: Genre[];
    };
  };
}
const Selectbox: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);
  const genres = useSelector(
    (state: GenreProps) => state.genreStore.genre.genres
  );
  const [selected] = useState<Array<number>>([]);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = parseFloat(e.target.value);
      if (selected.indexOf(value) === -1) {
        selected.push(value);
      }
      dispatch(fetchDiscover(...selected));
    },
    [dispatch, selected]
  );
  return (
    <select onChange={handleChange}>
      <option value="">Choose Genre</option>
      {genres !== undefined
        ? genres.map((genre, key) => (
            <option key={key} value={genre.id}>
              {genre.name}
            </option>
          ))
        : ""}
    </select>
  );
};

export default Selectbox;
