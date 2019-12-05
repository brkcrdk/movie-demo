import React from "react";
import { ActorBio } from "../../../store/serverTypes";
import { useSelector } from "react-redux";
interface Props {}
interface ActorStore {
  actorStore: {
    actor: ActorBio;
  };
}
const ActorInfo: React.FC<Props> = () => {
  const actorInfo = useSelector((state: ActorStore) => state.actorStore.actor);
  const renderBio = actorInfo && <span>{actorInfo.biography}</span>;
  return <div>{renderBio}</div>;
};

export default ActorInfo;
