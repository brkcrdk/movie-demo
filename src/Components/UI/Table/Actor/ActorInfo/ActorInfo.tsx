import React from "react";
import { Container, ImgContainer, InfoContainer } from "./ActorInfoStyle";
import { ActorBio } from "../../../../../store/serverTypes";
import { useSelector } from "react-redux";
import { imgUrl } from "../../../../../config";
interface Props {}
interface ActorProps {
  actorStore: {
    actor: ActorBio;
    isLoading: boolean;
  };
}

const ActorInfo: React.FC<Props> = () => {
  const actor = useSelector((state: ActorProps) => state.actorStore.actor);
  const isLoading = useSelector(
    (state: ActorProps) => state.actorStore.isLoading
  );
  if (isLoading) return <p>Loading..</p>;
  const renderActor = actor && (
    <Container>
      <ImgContainer>
        <img
          src={`${imgUrl}/w185${actor.profile_path}`}
          alt={`img-${actor.name}`}
        />
      </ImgContainer>
      <InfoContainer>
        <span>{actor.biography}</span>
        <p>
          <i className="fas fa-heart" /> {actor.popularity}
        </p>
      </InfoContainer>
    </Container>
  );
  return renderActor;
};

export default ActorInfo;
