import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Components/Pages/Navbar/Bar/Navbar";
import Sidebar from "./Components/Pages/Navbar/Sidebar";
import Dimmer from "./Components/UI/Dimmer";
import Routes from "./Routes";
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
          <Routes />
        </Dimmer>
      </Router>
    </Container>
  );
};

export default App;
