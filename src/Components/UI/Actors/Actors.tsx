import React, { useState, useEffect, useCallback } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
import { Cast } from "../../../store/serverTypes";
import { imgUrl } from "../../../config";
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
        <Content active={active === key} key={key}>
          {actor.name}
          <img
            src={`${imgUrl}/w185${actor.profile_path}`}
            style={{ width: "3em", height: "3em" }}
          />
        </Content>
      ))}
    </div>
  );
};

export default Actors;
