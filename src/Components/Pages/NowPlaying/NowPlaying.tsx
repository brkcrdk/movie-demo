import React from "react";

import MoviePage from "../../UI/MoviePage";
interface Props {}

const NowPlaying: React.FC<Props> = () => {
  return <MoviePage name="now_playing" />;
};

export default NowPlaying;
