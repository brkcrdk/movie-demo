import React from "react";
import styled from "styled-components";
import { device } from "../../../utils";
import { MovieInfo } from "../../../store/serverTypes";
interface Props {
  movies: MovieInfo[];
}

const Container = styled.div`
  @media ${device.mobileS} {
    display: block;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const MobileTable: React.FC<Props> = () => {
  return <Container>Mobile Table</Container>;
};

export default MobileTable;
