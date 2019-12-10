import React from "react";
import styled from "styled-components";

import { imgUrl } from "../../../../config";
interface Props {
  imgPath: string;
  movieName: string;
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  align-items: center;
  img {
    object-fit: cover;
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
`;
const Title: React.FC<Props> = ({ imgPath, movieName }) => {
  return (
    <Container>
      <img src={`${imgUrl}/w92${imgPath}`} alt={`img-${movieName}`} />
      <span>{movieName}</span>
    </Container>
  );
};

export default Title;
