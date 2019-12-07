import React from "react";
import { Container, Slayt, ActorSection } from "./DetailStyle";
import { useSelector } from "react-redux";
import { IDetail } from "../../../store/serverTypes";
import Carousel from "../Carousel/Carousel";
import Actors from "../Actor/ActorList/ActorList";
interface Props {
  activeIndex: number;
  index: number;
}
interface StoreProps {
  detailStore: {
    movie: IDetail;
    isLoading: boolean;
  };
}
const Detail: React.FC<Props> = ({ activeIndex, index }) => {
  const movie = useSelector((state: StoreProps) => state.detailStore.movie);
  const isLoading = useSelector(
    (state: StoreProps) => state.detailStore.isLoading
  );
  const renderImages = movie.images && (
    <Slayt>
      <Carousel isLoading={isLoading} images={movie.images} />
      <p>{movie.overview}</p>
    </Slayt>
  );
  const renderActors = movie.credits && (
    <ActorSection>
      <Actors credits={movie.credits} />
    </ActorSection>
  );

  return (
    <Container expand={activeIndex === index}>
      {renderImages}
      {renderActors}
    </Container>
  );
};

export default Detail;
