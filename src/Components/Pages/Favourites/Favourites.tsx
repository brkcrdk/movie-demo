import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Wrapper } from "./FavouritesStyle";
import { MovieInfo } from "../../../store/serverTypes";
import Card from "../../UI/Card/Card";

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
  const renderFavs =
    favMovies &&
    favMovies.map((item, index) => {
      const movie = item.movie;
      return (
        <Card
          key={index}
          posterPath={movie.poster_path}
          name={movie.title}
          voteAvg={movie.vote_average}
          releaseDate={movie.release_date}
        />
      );
    });
  return (
    <Container>
      <Wrapper>
        {favMovies.length > 0 ? renderFavs : "No favourite movies"}
      </Wrapper>
    </Container>
  );
};

export default Favourites;
