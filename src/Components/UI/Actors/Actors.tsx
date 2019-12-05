import React, { useCallback, useState, useEffect } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
import { useDispatch, useSelector } from "react-redux";
import { Cast, ActorBio } from "../../../store/serverTypes";
import { fetchActor } from "../../../store/Actor/action";
import ActorInfo from "./ActorInfo";
interface Props {
  credits: {
    cast: Cast[];
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
  const first = actors[0].id;
  useEffect(() => {
    dispatch(fetchActor(first));
  }, [first, dispatch]);
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
      <ActorInfo />
    </div>
  );
};

export default Actors;
