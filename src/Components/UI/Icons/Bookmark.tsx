import React, { useCallback } from "react";
import styled from "styled-components";
import { colours, fonts } from "../../../utils";
import { useSelector, useDispatch } from "react-redux";
import { MovieInfo } from "../../../store/serverTypes";
import { Link } from "react-router-dom";
import { toggleSection } from "../../../store/Toggles/action";

interface Props {}

interface FavStore {
  favourites: {
    favMovies: { movie: MovieInfo }[];
  };
}
const Button = styled(Link)`
  &&& {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    color: ${colours.pink};
    font-size: 1.2em;
    position: relative;
    margin: 1em;
    font-family: ${fonts.MontserratAlternates};
    > span {
      position: absolute;
      top: -0.5em;
      right: -0.6em;
      font-size: 0.8em;
      font-weight: 600;
    }
  }
`;
const Bookmark: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const favMovies = useSelector(
    (state: FavStore) => state.favourites.favMovies
  );
  const isEmpty = favMovies.length > 0 ? "fas" : "far";

  const handleSection = useCallback(() => {
    dispatch(toggleSection("favourite"));
  }, [dispatch]);

  const renderCount =
    favMovies.length > 0 ? <span>{favMovies.length}</span> : "";

  return (
    <Button to="/favourites" onClick={handleSection}>
      <i className={`${isEmpty} fa-bookmark`} />
      {renderCount}
    </Button>
  );
};

export default Bookmark;
