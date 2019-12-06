import React, { useCallback, useState, useEffect } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
import { useDispatch } from "react-redux";
import { Cast } from "../../../store/serverTypes";
import { fetchActor } from "../../../store/Actor/action";
import ActorInfo from "./ActorInfo";
interface Props {
  credits: {
    cast: Cast[];
  };
}

const Actors: React.FC<Props> = ({ credits }) => {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const actors = credits.cast.filter((actor, index) => {
    return index < 5;
  });
  const dispatch = useDispatch();
  const handleActor = useCallback(
    (id: number, key: number) => {
      setActive(key);
      setLoading(true);
      dispatch(fetchActor(id));
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    },
    [dispatch]
  );
  const first = actors[0].id;
  useEffect(() => {
    dispatch(fetchActor(first));
  }, [first, dispatch]);
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
      <ActorInfo loading={loading} />
    </div>
  );
};

export default Actors;
