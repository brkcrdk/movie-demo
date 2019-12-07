import React from "react";

import Genres from "./Filters/Genres/Genres";
import Sort from "../Main/Filters/Sort/Sort";
import styled from "styled-components";
import { device } from "../../../utils";
interface Props {
  activePage: number;
}

const Container = styled.div``;
const Filters: React.FC<Props> = ({ activePage }) => {
  return <Container></Container>;
};

export default Filters;
