import React from "react";
import { Route, useLocation } from "react-router-dom";
import NowPlaying from "./Components/Pages/NowPlaying/NowPlaying";
import Popular from "./Components/Pages/Popular/Popular";
import TopRated from "./Components/Pages/TopRated/TopRated";
import Upcoming from "./Components/Pages/Upcoming/Upcoming";
import Discover from "./Components/Pages/Main/Discover";
import Favourites from "./Components/Pages/Favourites/Favourites";
import MovieDetail from "./Components/Pages/MovieDetail/MovieDetail";

interface Props {}

const Routes: React.FC<Props> = () => {
  const location = useLocation();
  return (
    <>
      <Route path="/" exact component={Discover} />
      <Route path="/movies/popular" component={Popular} />
      <Route path="/movies/top_rated" component={TopRated} />
      <Route path="/movies/upcoming" component={Upcoming} />
      <Route path="/movies/now_playing" component={NowPlaying} />
      <Route path="/favourites" component={Favourites} />
    </>
  );
};

export default Routes;
