import React from "react";
import { ActorBio } from "../../../store/serverTypes";
import { useSelector } from "react-redux";
import { imgUrl } from "../../../config";

interface Props {}
interface ActorProps {
  actorStore: {
    actor: ActorBio;
  };
}

const ActorInfo: React.FC<Props> = () => {
  const actor = useSelector((state: ActorProps) => state.actorStore.actor);

  const renderActor = actor && (
    <div>
      <img src={`${imgUrl}/w185${actor.profile_path}`} />
      <span>{actor.biography}</span>
    </div>
  );
  return <div>{renderActor}</div>;
};

export default ActorInfo;
