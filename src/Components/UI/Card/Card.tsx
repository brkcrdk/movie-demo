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
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  > img {
    width: 100%;
  }
`;
const InfoContainer = styled.div`
  width: 100%;
  display: grid;
  > span {
    text-align: center;
    margin: 0.5em 0;
    font-weight: 700;
    font-size: 1.1em;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0.5em;
  > div {
    display: grid;
    > span:first-child {
      color: ${colours.pink};
      padding-bottom: 0.5em;
    }
    > span:last-child {
      font-size: 0.9em;
    }
    > hr {
      width: 100%;
      margin: 0;
      margin-bottom: 0.5em;
      padding: 0;
    }
  }
  strong {
    color: ${colours.pink};
  }
`;
const Card: React.FC<Props> = ({ posterPath, name, voteAvg, releaseDate }) => {
  return (
    <Container>
      <img src={`${imgUrl}/w500/${posterPath}`} />
      <InfoContainer>
        <span>{name}</span>
        <Bottom>
          <div>
            <span>Vote Avg:</span>
            <hr />
            <span>
              <strong>{voteAvg}</strong>/10
            </span>
          </div>
          <div>
            <span>Release Date</span>
            <hr />
            <span>{releaseDate}</span>
          </div>
        </Bottom>
      </InfoContainer>
    </Container>
  );
};

export default Card;
