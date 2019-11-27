import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NowPlaying from "./Components/Pages/NowPlaying/NowPlaying";
import Popular from "./Components/Pages/Popular/Popular";
import TopRated from "./Components/Pages/TopRated/TopRated";
import Upcoming from "./Components/Pages/Upcoming/Upcoming";
import Discover from "./Components/Pages/Main/Discover";
import Selectbox from "./Components/UI/Selectbox/Selectbox";
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Selectbox />
        <Route path="/" exact component={Discover} />
        <Route path="/movies/popular" component={Popular} />
        <Route path="/movies/top_rated" component={TopRated} />
        <Route path="/movies/upcoming" component={Upcoming} />
        <Route path="/movies/now_playing" component={NowPlaying} />
      </Router>
    </div>
  );
};

export default App;
