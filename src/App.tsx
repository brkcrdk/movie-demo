import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NowPlaying from "./Components/Pages/NowPlaying/NowPlaying";
import Popular from "./Components/Pages/Popular/Popular";
import TopRated from "./Components/Pages/TopRated/TopRated";
import Upcoming from "./Components/Pages/Upcoming/Upcoming";
import Discover from "./Components/Pages/Discover/Discover";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={NowPlaying} />
        <Route path="/movies/popular" component={Popular} />
        <Route path="/movies/top_rated" component={TopRated} />
        <Route path="/movies/upcoming" component={Upcoming} />
        <Route path="/discover" component={Discover} />
      </Router>
    </div>
  );
};

export default App;
