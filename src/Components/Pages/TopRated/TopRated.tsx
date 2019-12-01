import React from "react";
import MoviePage from "../../UI/MoviePage";
interface Props {}

const TopRated: React.FC<Props> = () => {
  return <MoviePage name="top_rated" />;
};

export default TopRated;
