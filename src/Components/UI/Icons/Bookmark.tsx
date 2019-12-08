import React from "react";
import styled from "styled-components";
import { colours } from "../../../utils";
import { useSelector } from "react-redux";
import { MovieInfo } from "../../../store/serverTypes";
interface Props {}

interface FavStore {
  favourites: {
    favMovies: { movie: MovieInfo }[];
  };
}
const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  color: ${colours.pink};
  font-size: 1.2em;
`;
const Bookmark: React.FC<Props> = () => {
  const favMovies = useSelector(
    (state: FavStore) => state.favourites.favMovies
  );
  const isEmpty = favMovies.length > 0 ? "fas" : "far";
  return (
    <Button>
      <i className={`${isEmpty} fa-bookmark`} />
    </Button>
  );
};

export default Bookmark;
