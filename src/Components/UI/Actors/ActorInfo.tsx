import React from "react";
import { ActorBio } from "../../../store/serverTypes";
import { useSelector } from "react-redux";

interface Props {
  loading: boolean;
}
interface ActorProps {
  actorStore: {
    actor: ActorBio;
  };
}

const ActorInfo: React.FC<Props> = ({ loading }) => {
  const actor = useSelector((state: ActorProps) => state.actorStore.actor);
  const renderActor = actor && actor.popularity;
  return <div>{loading ? "Loading" : renderActor}</div>;
};

export default ActorInfo;
