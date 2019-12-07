import React, { useEffect } from "react";
import { fetchGenres } from "../../../store/Genres/action";
import { useDispatch } from "react-redux";
import Genres from "./Filters/Genres/Genres";
import Sort from "../Main/Filters/Sort/Sort";
import styled from "styled-components";
interface Props {
  activePage: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  background-color: white;
  z-index: 3;
  position: fixed;
  padding-bottom: 0.5em;
  margin-top: 0.9em;
`;
const Filters: React.FC<Props> = ({ activePage }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <Container>
      <Genres />
      <Sort activePage={activePage} />
    </Container>
  );
};

export default Filters;
