import React, { useCallback, useState, useEffect } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
import { useDispatch } from "react-redux";
import { Cast } from "../../../store/serverTypes";
import { fetchActor } from "../../../store/Actor/action";
import ActorInfo from "./ActorInfo";
import { imgUrl } from "../../../config";

interface Props {
  credits: {
    cast: Cast[];
  };
}

const Actors: React.FC<Props> = ({ credits }) => {
  const [active, setActive] = useState(0);
  const [actorBio, setActorBio] = useState(0);
  const actors = credits.cast.filter((actor, i) => {
    return i < 5;
  });
  const dispatch = useDispatch();
  const handleActor = useCallback(
    (id: number, index: number) => {
      setActive(index);
      dispatch(fetchActor(id));
    },
    [dispatch]
  );

  return (
    <div>
      <Tabs>
        {actors.map((actor, key) => (
          <Tab
            active={active === key}
            key={key}
            onClick={() => {
              handleActor(actor.id, key);
            }}
          >
            {actor.name}
          </Tab>
        ))}
      </Tabs>
      <ActorInfo />
    </div>
  );
};

export default Actors;
