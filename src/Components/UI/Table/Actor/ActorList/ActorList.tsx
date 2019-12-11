import React, { useCallback, useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Splitter,
  InfoContainer
} from "./ActorListStyle";
import { useDispatch, useSelector } from "react-redux";
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
interface ToggleProps {
  toggle: {
    slaytGrid: number;
  };
}
const ActorList: React.FC<Props> = ({ credits }) => {
  const slaytGrid = useSelector((state: ToggleProps) => state.toggle.slaytGrid);
  const [active, setActive] = useState(slaytGrid);
  useEffect(() => {
    setActive(slaytGrid);
  }, [slaytGrid]);

  const actors = credits.cast
    .filter(actor => {
      return actor.profile_path !== null;
    })
    .filter((actor, index) => {
      return index < 4;
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
            <img
              src={`${imgUrl}/w185${actor.profile_path}`}
              alt={`img-${actor.name}`}
            />
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
