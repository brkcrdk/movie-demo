import React from "react";
import styled from "styled-components";
import { imgUrl } from "../../../config";
import { colours } from "../../../utils";

interface Props {
  posterPath: string;
  name: string;
}

const Container = styled.div`
  width: 15em;
  box-shadow: ${colours.darkerBoxShadow};
  position: relative;

  &:hover > div {
    display: grid;
    position: absolute;
    top: 0;
    width: 100%;
  }
  > div {
    display: none;
  }
  > img {
    width: 100%;
  }
  span {
    width: 100%;
    background-color: rgba(0, 0, 1, 0.2);
  }
`;

const Card: React.FC<Props> = ({ posterPath, name }) => {
  return (
    <Container>
      <img src={`${imgUrl}/w500/${posterPath}`} />
      <div>
        <span>{name}</span>
      </div>
    </Container>
  );
};

export default Card;
