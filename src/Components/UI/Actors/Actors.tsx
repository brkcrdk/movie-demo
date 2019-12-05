import React, { useState, useEffect } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
import { Cast, ActorBio } from "../../../store/serverTypes";
import { imgUrl, apiUrl, apiKey } from "../../../config";
import axios from "axios";
interface Props {
  credits: {
    cast: Cast[];
  };
}
const Actors: React.FC<Props> = ({ credits }) => {
  const [active, setActive] = useState(0);
  const [actorBio, setActorBio] = useState<ActorBio>();
  const actors = credits.cast.filter((actor, index) => {
    return index < 5;
  });

  useEffect(() => {
    const firstActor = actors[0].id;
    fetchDetail(firstActor);
  }, [actors]);

  const handleTab = (index: number, actorId: number) => {
    if (active !== index) setActive(index);
    fetchDetail(actorId);
  };
  const fetchDetail = (actorId: number) => {
    axios
      .get(`${apiUrl}/person/${actorId}?api_key=${apiKey}&language=en-US`)
      .then(({ data }) => {
        setActorBio(data);
      })
      .catch(error => {
        console.log(error);
      });
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
