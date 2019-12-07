import React, { useCallback, useState } from "react";
import {
  Container,
  Header,
  Content,
  Splitter,
  InfoContainer
} from "./ActorListStyle";
import { useDispatch } from "react-redux";
import { Cast } from "../../../../store/serverTypes";
import { fetchActor } from "../../../../store/Actor/action";
import { toggleSlaytGrid } from "../../../../store/Toggles/action";
import { imgUrl } from "../../../../config";
import ActorInfo from "../ActorInfo/ActorInfo";

interface Props {
  credits: {
    cast: Cast[];
  };
}

const ActorList: React.FC<Props> = ({ credits }) => {
  const [active, setActive] = useState(-1);

  const actors = credits.cast.filter((actor, i) => {
    return i < 4;
  });
  const dispatch = useDispatch();
  const handleActor = useCallback(
    (id: number, index: number) => {
      if (active === index) {
        setActive(-1);
        dispatch(toggleSlaytGrid(-1));
      } else {
        setActive(index);
        dispatch(toggleSlaytGrid(index));
      }
      dispatch(fetchActor(id));
    },
    [dispatch, active, setActive]
  );

  return (
    <Container>
      {actors.map((actor, key) => (
        <Content toggle={active === key} key={key}>
          <Header
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

export default ActorList;
