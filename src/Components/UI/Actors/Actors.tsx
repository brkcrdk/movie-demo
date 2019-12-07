import React, { useCallback, useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Splitter,
  InfoContainer
} from "./ActorStyle";
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
  const [active, setActive] = useState(-1);
  const actors = credits.cast.filter((actor, i) => {
    return i < 4;
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

  return (
    <Container>
      {actors.map((actor, key) => (
        <Content toggle={active === key}>
          <Header
            key={key}
            onClick={() => {
              handleActor(actor.id, key);
            }}
          >
            <img src={`${imgUrl}/w185${actor.profile_path}`} />
            {actor.name}
          </Header>
          <InfoContainer active={active === key}>
            <ActorInfo />
          </InfoContainer>
          <Splitter />
        </Content>
      ))}
    </Container>
  );
};

export default Actors;
