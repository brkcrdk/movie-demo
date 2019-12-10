import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import NowPlaying from "./Components/Pages/NowPlaying/NowPlaying";
import Popular from "./Components/Pages/Popular/Popular";
import TopRated from "./Components/Pages/TopRated/TopRated";
import Upcoming from "./Components/Pages/Upcoming/Upcoming";
import Discover from "./Components/Pages/Main/Discover";
import Navbar from "./Components/Pages/Navbar/Bar/Navbar";
import Sidebar from "./Components/Pages/Navbar/Sidebar";
import Dimmer from "./Components/UI/Dimmer";
import Favourites from "./Components/Pages/Favourites/Favourites";
import { useDispatch } from "react-redux";
import { addFav } from "./store/Favourite/action";
const Container = styled.div`
  max-width: 91em;
  margin: 0 auto;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const local = { ...localStorage };
    Object.keys(local).map(key => {
      const item = localStorage.getItem(key);
      if (item !== null) {
        const movie = JSON.parse(item);
        dispatch(addFav(movie));
      }
      return item;
    });
  }, [dispatch]);

  return (
    <Container>
      <Router>
        <Sidebar />
        <Dimmer>
          <Navbar />
          <Route path="/" exact component={Discover} />
          <Route path="/movies/popular" component={Popular} />
          <Route path="/movies/top_rated" component={TopRated} />
          <Route path="/movies/upcoming" component={Upcoming} />
          <Route path="/movies/now_playing" component={NowPlaying} />
          <Route path="/favourites" component={Favourites} />
        </Dimmer>
      </Router>
    </Container>
  );
};

export default App;
