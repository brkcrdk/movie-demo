import React, { useState } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
import { Cast, ActorBio } from "../../../store/serverTypes";
import { fetchActor } from "../../../store/Actor/action";
import { useDispatch, useSelector } from "react-redux";
import { imgUrl } from "../../../config";
interface Props {
  credits: {
    cast: Cast[];
  };
}
interface ActorStore {
  actorStore: {
    actor: ActorBio;
    isLoading: boolean;
  };
}
const Actors: React.FC<Props> = ({ credits }) => {
  const [active, setActive] = useState(0);

  const dispatch = useDispatch();

  const actors = credits.cast.filter((actor, index) => {
    return index < 5;
  });

  const handleTab = (index: number, actorId: number) => {
    if (active !== index) setActive(index);
    dispatch(fetchActor(actorId));
  };
  const actorBio = useSelector((state: ActorStore) => state.actorStore.actor);
  const isLoading = useSelector(
    (state: ActorStore) => state.actorStore.isLoading
  );
  const renderBio = actorBio && (
    <div>
      <span>{actorBio.biography}</span>
      <span>{actorBio.popularity}</span>
    </div>
  );

  return (
    <div>
      <Tabs>
        {actors.map((actor, key) => (
          <Tab
            active={active === key}
            key={key}
            onClick={() => {
              handleTab(key, actor.id);
            }}
          >
            {actor.name}
          </Tab>
        ))}
      </Tabs>

      {actors.map((actor, key) => (
        <Content active={active === key} key={key}></Content>
      ))}
    </div>
  );
};

export default Actors;
