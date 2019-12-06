import React from "react";
import { ActorBio } from "../../../store/serverTypes";
import { useSelector } from "react-redux";
import { imgUrl } from "../../../config";
import styled from "styled-components";
interface Props {}
interface ActorProps {
  actorStore: {
    actor: ActorBio;
  };
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  img {
    height: 10em;
  }
`;
const InfoContainer = styled.div`
  display: grid !important;

  span {
    padding: 1em 2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
`;
const ActorInfo: React.FC<Props> = () => {
  const actor = useSelector((state: ActorProps) => state.actorStore.actor);
  const renderActor = actor && (
    <Container>
      <ImgContainer>
        <img src={`${imgUrl}/w185${actor.profile_path}`} />
      </ImgContainer>
      <InfoContainer>
        <span>{actor.biography}</span>
        <p>Popularity: {actor.popularity}</p>
      </InfoContainer>
    </Container>
  );
  return renderActor;
};

export default ActorInfo;
