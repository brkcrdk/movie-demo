import React from "react";
import styled from "styled-components";
import { imgUrl } from "../../../config";
import { colours, fonts } from "../../../utils";

interface Props {
  posterPath: string;
  name: string;
  voteAvg: number;
  releaseDate: string;
  key?: number;
}

const Container = styled.div`
  width: 13em;
  box-shadow: ${colours.darkerBoxShadow};
  position: relative;
  font-family: ${fonts.aBeeZee};
  > img {
    width: 100%;
  }
`;
const InfoContainer = styled.div`
  width: 100%;
  display: grid;
  > span {
    text-align: center;
    padding: 0.5em 0;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0.5em;
`;
const Card: React.FC<Props> = ({ posterPath, name, voteAvg, releaseDate }) => {
  return (
    <Container>
      <img src={`${imgUrl}/w500/${posterPath}`} />
      <InfoContainer>
        <span>{name}</span>
        <Bottom>
          <span>{voteAvg}/10</span>
          <span>{releaseDate}</span>
        </Bottom>
      </InfoContainer>
    </Container>
  );
};

export default Card;
