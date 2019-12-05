import React, { useCallback, useState, useEffect } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
import { useDispatch, useSelector } from "react-redux";
import { Cast, ActorBio } from "../../../store/serverTypes";
import { fetchActor } from "../../../store/Actor/action";
interface Props {
  credits: {
    cast: Cast[];
  };
}
interface ActorProps {
  actorStore: {
    actor: ActorBio;
  };
}
const Actors: React.FC<Props> = ({ credits }) => {
  const [active, setActive] = useState(0);
  const actors = credits.cast.filter((actor, index) => {
    return index < 5;
  });
  const dispatch = useDispatch();
  const handleActor = useCallback(
    (id: number) => {
      dispatch(fetchActor(id));
    },
    [dispatch]
  );
  const actor = useSelector((state: ActorProps) => state.actorStore.actor);
  return (
    <div>
      {actors.map((actor, id) => (
        <li
          key={id}
          onClick={() => {
            handleActor(actor.id);
          }}
        >
          {actor.name}
        </li>
      ))}
      {actor && actor.name}
    </div>
  );
};

export default Actors;
