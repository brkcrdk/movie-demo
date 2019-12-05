import React from "react";
import { ActorBio } from "../../../store/serverTypes";
import { useSelector, useDispatch } from "react-redux";
interface Props {}
interface ActorStore {
  actorStore: {
    actor: ActorBio;
    isLoading: boolean;
  };
}
const ActorInfo: React.FC<Props> = () => {
  const actorInfo = useSelector((state: ActorStore) => state.actorStore.actor);
  const isLoading = useSelector(
    (state: ActorStore) => state.actorStore.isLoading
  );
  const renderBio = actorInfo && (
    <span>
      {actorInfo.biography}
      {actorInfo.id}
    </span>
  );
  return <div>{isLoading ? "Loading" : renderBio}</div>;
};

export default ActorInfo;
