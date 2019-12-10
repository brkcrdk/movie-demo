import React from "react";
import { imgUrl } from "../../../config";
import { ToggleIcons } from "../../UI/Icons/Icons";
import { Container, InfoContainer, Bottom } from "./CardStyle";
interface Props {
  posterPath: string;
  name: string;
  voteAvg: number;
  releaseDate: string;
  key?: number;
}

const Card: React.FC<Props> = ({ posterPath, name, voteAvg, releaseDate }) => {
  return (
    <Container>
      <ToggleIcons icon="times-circle" />
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
