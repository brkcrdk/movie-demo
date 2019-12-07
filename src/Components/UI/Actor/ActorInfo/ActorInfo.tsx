import React from "react";
import { Container, ImgContainer, InfoContainer } from "./ActorInfoStyle";
import { ActorBio } from "../../../../store/serverTypes";
import { useSelector } from "react-redux";
import { imgUrl } from "../../../../config";

interface Props {}
interface ActorProps {
  actorStore: {
    actor: ActorBio;
  };
}

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
