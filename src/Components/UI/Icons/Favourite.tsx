import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../../store/Favourite/action";
import { MovieInfo } from "../../../store/serverTypes";
import styled from "styled-components";
import { colours } from "../../../utils";
interface Props {
  movie: MovieInfo;
}
interface FavStore {
  favourites: {
    favMovies: { movie: MovieInfo }[];
  };
}
const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${colours.pink};
  font-size: 1.2em;
  cursor: pointer;
`;
const Favourite: React.FC<Props> = ({ movie }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const favourites = useSelector(
    (state: FavStore) => state.favourites.favMovies
  );
  useEffect(() => {
    if (favourites.length > 0) {
      const ids = favourites.map(item => item.movie.id);
      if (ids.indexOf(movie.id) !== -1) {
        setToggle(true);
      }
    }
  }, [favourites, movie]);

  const handleFav = useCallback(() => {
    if (!toggle) {
      dispatch(addFav({ movie }));
      setToggle(true);
    } else {
      dispatch(removeFav({ movie }));
      setToggle(false);
    }
  }, [toggle, dispatch, movie]);

  return (
    <Button onClick={handleFav}>
      <i className={`${toggle ? "fas" : "far"} fa-heart`} />
    </Button>
  );
};

export default Favourite;
