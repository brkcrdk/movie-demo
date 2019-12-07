import React from "react";
import { Expandable, Content, Slayt, ActorSection } from "./DetailStyle";
import { useSelector } from "react-redux";
import { IDetail } from "../../../../store/serverTypes";
import Carousel from "../../Carousel/Carousel";
import Actors from "../../Actors/Actors";
interface Props {
  activeIndex: number;
  index: number;
}
interface StoreProps {
  detailStore: {
    movie: IDetail;
    isLoading: boolean;
  };
  toggle: {
    actorList: number;
  };
}
const Detail: React.FC<Props> = ({ activeIndex, index }) => {
  const movie = useSelector((state: StoreProps) => state.detailStore.movie);
  const isLoading = useSelector(
    (state: StoreProps) => state.detailStore.isLoading
  );
  const active = useSelector((state: StoreProps) => state.toggle.actorList);
  console.log(active);
  const renderImages = movie.images && (
    <Slayt>
      <Carousel isLoading={isLoading} images={movie.images} />
      <p>{movie.overview}</p>
    </Slayt>
  );
  const renderActors = movie.credits && <Actors credits={movie.credits} />;

  return (
    <Expandable expand={activeIndex === index}>
      <Content id="content">
        {renderImages}
        <ActorSection>{renderActors}</ActorSection>
      </Content>
    </Expandable>
  );
};

export default Detail;
