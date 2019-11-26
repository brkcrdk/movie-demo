import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../../store/Genres/action";
import { fetchDiscover } from "../../../store/Discover/action";
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
  //   const [selected, setSelected] = useState<Array<number>>([]);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = parseFloat(e.target.value);
      dispatch(addTag([{ name: e.target.id, id: value }]));
    },
    [dispatch]
  );

  return (
    <div>
      <select onChange={handleChange}>
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
