import React from "react";
import styled from "styled-components";
import { colours, fonts } from "../../../utils";
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
  position: relative;
  font-family: ${fonts.MontserratAlternates};
  > span {
    position: absolute;
    top: -0.5em;
    right: -0.2em;
    font-size: 0.8em;
    font-weight: 600;
  }
`;
const Bookmark: React.FC<Props> = () => {
  const favMovies = useSelector(
    (state: FavStore) => state.favourites.favMovies
  );
  const isEmpty = favMovies.length > 0 ? "fas" : "far";
  const renderCount =
    favMovies.length > 0 ? <span>{favMovies.length}</span> : "";
  return (
    <Button>
      <i className={`${isEmpty} fa-bookmark`} />
      {renderCount}
    </Button>
  );
};

export default Bookmark;
