import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
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
  const background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
        <Route path="/" exact component={Discover} />
        <Route path="/popular" component={Popular} />
        <Route path="/top_rated" component={TopRated} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/now_playing" component={NowPlaying} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
      {background && <Route path="/movie/:id" component={MovieDetail} />}
    </>
  );
};

export default Routes;
