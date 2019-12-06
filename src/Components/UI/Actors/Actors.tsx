import React, { useCallback, useState, useEffect } from "react";
import { Container, List, Content } from "./ActorStyle";
import { useDispatch, useSelector } from "react-redux";
import { Cast, ActorBio } from "../../../store/serverTypes";
import { fetchActor } from "../../../store/Actor/action";
import ActorInfo from "./ActorInfo";
import { imgUrl } from "../../../config";

interface Props {
  credits: {
    cast: Cast[];
  };
}

const Actors: React.FC<Props> = ({ credits }) => {
  const [active, setActive] = useState(-1);
  const actors = credits.cast.filter((actor, i) => {
    return i < 5;
  });
  const dispatch = useDispatch();
  const handleActor = useCallback(
    (id: number, index: number) => {
      if (active === index) {
        setActive(-1);
      } else {
        setActive(index);
      }
      dispatch(fetchActor(id));
    },
    [dispatch, active, setActive]
  );
  // const handleActor = (id: number, index: number) => {
  //   if (active === index) {
  //     setActive(-1);
  //   } else {
  //     setActive(index);
  //   }
  //   dispatch(fetchActor(id));
  // };
  return (
    <Container>
      {actors.map((actor, key) => (
        <Content
          active={active === key}
          onClick={() => {
            handleActor(actor.id, key);
          }}
        >
          <List key={key}>
            {actor.name} Popularity: {}
          </List>
          <div>
            <ActorInfo />
          </div>
        </Content>
      ))}
    </Container>
  );
};

export default Actors;
