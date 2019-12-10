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
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  margin: 0 5em;
  margin-bottom: 1em;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-gap: 2em;
`;
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
