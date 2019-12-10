import React from "react";
import { useSelector } from "react-redux";
import { MovieInfo } from "../../../store/serverTypes";
import Card from "../../UI/Card/Card";
import styled from "styled-components";
interface Props {}
interface FavStore {
  favourites: {
    favMovies: { movie: MovieInfo }[];
  };
}

const Container = styled.div`
  margin: 0 auto;
`;
const Wrapper = styled.div`
  margin: 0 5em;
  margin-bottom: 1em;
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  grid-gap: 3em;
`;
const Favourites: React.FC<Props> = () => {
  const favMovies = useSelector(
    (state: FavStore) => state.favourites.favMovies
  );
  const renderFavs =
    favMovies &&
    favMovies.map((movie, index) => (
      <Card posterPath={movie.movie.poster_path} name={movie.movie.title} />
    ));
  return (
    <Container>
      <Wrapper>
        {favMovies.length > 0 ? renderFavs : "No favourite movies"}
      </Wrapper>
    </Container>
  );
};

export default Favourites;
