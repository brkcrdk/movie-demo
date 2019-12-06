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

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
`;
const ImgContainer = styled.div`
  border: 1px solid red;
  img {
    height: 10em;
  }
`;
const ActorInfo: React.FC<Props> = () => {
  const actor = useSelector((state: ActorProps) => state.actorStore.actor);
  const renderActor = actor && (
    <Container>
      <ImgContainer>
        <img src={`${imgUrl}/w185${actor.profile_path}`} />
      </ImgContainer>
      <div>
        <span>{actor.biography}</span>
      </div>
    </Container>
  );
  return renderActor;
};

export default ActorInfo;
