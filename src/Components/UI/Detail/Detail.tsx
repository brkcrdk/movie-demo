import React from "react";
import { Container, Slayt } from "./DetailStyle";
import { useSelector } from "react-redux";
import { IDetail } from "../../../store/serverTypes";
import Carousel from "../Carousel/Carousel";
import ActorList from "../Actor/ActorList/ActorList";
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
interface ToggleProps {
  toggle: {
    slaytGrid: number;
  };
}
const Detail: React.FC<Props> = ({ activeIndex, index }) => {
  const movie = useSelector((state: StoreProps) => state.detailStore.movie);
  const isLoading = useSelector(
    (state: StoreProps) => state.detailStore.isLoading
  );
  const slaytGrid = useSelector((state: ToggleProps) => state.toggle.slaytGrid);
  const renderImages = movie.images && (
    <Slayt toggle={slaytGrid !== -1}>
      <Carousel
        isLoading={isLoading}
        images={movie.images}
        imgSize={slaytGrid !== -1 ? "big" : "small"}
      />
      <p>{movie.overview}</p>
    </Slayt>
  );
  const renderActors = movie.credits && <ActorList credits={movie.credits} />;

  return (
    <Container expand={activeIndex === index}>
      {renderImages}
      {renderActors}
    </Container>
  );
};

export default Detail;
