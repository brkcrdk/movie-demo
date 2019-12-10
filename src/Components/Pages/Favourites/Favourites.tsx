import React from "react";
import { useSelector } from "react-redux";
import { MovieInfo } from "../../../store/serverTypes";
interface Props {}
interface FavStore {
  favourites: {
    favMovies: { movie: MovieInfo }[];
  };
}
const Favourites: React.FC<Props> = () => {
  const favMovies = useSelector(
    (state: FavStore) => state.favourites.favMovies
  );

  return <div></div>;
};

export default Favourites;
