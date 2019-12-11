import React from "react";
import { imgUrl } from "../../../config";
import { ToggleIcons } from "../../UI/Icons/Icons";
import { Container, InfoContainer, Bottom } from "./CardStyle";
import { Link } from "react-router-dom";
interface Props {
  posterPath: string;
  name: string;
  voteAvg: number;
  releaseDate: string;
  movieId: number;
  key?: number;
  removeFunc?: () => void;
}

const Card: React.FC<Props> = ({
  posterPath,
  name,
  voteAvg,
  releaseDate,
  removeFunc,
  movieId
}) => {
  return (
    <Container>
      <ToggleIcons icon="times-circle" onClick={removeFunc} />
      <img src={`${imgUrl}/w500/${posterPath}`} alt={`img-${name}`} />
      <Link to={`/movie/${movieId}`}>
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
      </Link>
    </Container>
  );
};

export default Card;
