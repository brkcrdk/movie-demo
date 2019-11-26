import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../../store/Genres/action";
import { addTag } from "../../../store/DiscoverFilter/action";
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
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const id = parseFloat(e.target.value);
      const name = e.target.options[e.target.selectedIndex].innerHTML;
      dispatch(addTag([{ name: name, id: id }]));
    },
    [dispatch]
  );

  return (
    <div>
      <select onChange={handleChange}>
        <option selected disabled>
          Choose genre
        </option>
        {genres !== undefined
          ? genres.map((genre, key) => (
              <option key={key} value={genre.id} id={genre.name}>
                {genre.name}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};

export default Selectbox;
