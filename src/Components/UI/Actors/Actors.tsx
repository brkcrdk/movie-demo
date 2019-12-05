import React, { useCallback, useState, useEffect } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
import { useDispatch } from "react-redux";
import { Cast } from "../../../store/serverTypes";
import { fetchActor } from "../../../store/Actor/action";
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
  return (
    <div>
      {actors.map((actor, id) => (
        <li key={id}>{actor.name}</li>
      ))}
    </div>
  );
};

export default Actors;
