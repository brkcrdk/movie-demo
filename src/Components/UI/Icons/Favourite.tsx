import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../../store/Favourite/action";
import { MovieList } from "../../../store/serverTypes";
import styled from "styled-components";
import { colours } from "../../../utils";
interface Props {
  id: number;
}
interface FavStore {
  favourites: {
    favMovies: { movie: MovieList }[];
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
const Favourite: React.FC<Props> = () => {
  const favourites = useSelector(
    (state: FavStore) => state.favourites.favMovies
  );
  const [toggle, setToggle] = useState(false);

  useEffect(() => {}, [favourites]);

  const handleFav = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <Button onClick={handleFav}>
      <i className={`${toggle ? "fas" : "far"} fa-heart`} />
    </Button>
  );
};

export default Favourite;
