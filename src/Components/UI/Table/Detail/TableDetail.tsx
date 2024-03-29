import React from "react";
import { Container, Slayt } from "./TableDetailStyle";
import { useSelector } from "react-redux";
import { IDetail } from "../../../../store/serverTypes";
import Carousel from "../../Carousel/Carousel";
import ActorList from "../Actor/ActorList/ActorList";
import Loader from "../../Loader";
interface Props {
  activeIndex: number;
  index: number;
  isMobile?: boolean;
}
interface StoreProps {
  detailStore: {
    movie: IDetail;
    isLoading: boolean;
  };
  toggle: {
    slaytGrid: number;
  };
}

const TableDetail: React.FC<Props> = ({
  activeIndex,
  index,
  isMobile = false
}) => {
  const movie = useSelector((state: StoreProps) => state.detailStore.movie);
  const isLoading = useSelector(
    (state: StoreProps) => state.detailStore.isLoading
  );
  const slaytGrid = useSelector((state: StoreProps) => state.toggle.slaytGrid);
  const imgSize = () => {
    if (slaytGrid !== -1) return "big";
    if (isMobile) return "big";
    return "small";
  };

  if (isLoading) return <Loader />;

  const renderImages = movie.images && (
    <Slayt toggle={slaytGrid !== -1}>
      <Carousel
        isLoading={isLoading}
        images={movie.images}
        imgSize={imgSize()}
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

export default TableDetail;
