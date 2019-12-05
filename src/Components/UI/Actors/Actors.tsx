import React, { useState } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
import { Cast, ActorBio } from "../../../store/serverTypes";

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

  const actors = credits.cast.filter((actor, index) => {
    return index < 5;
  });

  const handleTab = (index: number, actorId: number) => {
    if (active !== index) setActive(index);
  };

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
