import React, { useEffect } from "react";
import { Expandable, Content, Slayt } from "./DetailStyle";
import { useSelector, useDispatch } from "react-redux";
import { IDetail, ActorBio } from "../../../../store/serverTypes";
import { fetchActor } from "../../../../store/Actor/action";
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
}
const Detail: React.FC<Props> = ({ activeIndex, index }) => {
  const movie = useSelector((state: StoreProps) => state.detailStore.movie);
  const isLoading = useSelector(
    (state: StoreProps) => state.detailStore.isLoading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (movie.credits) {
      dispatch(fetchActor(movie.credits.cast[0].id));
    }
  }, [dispatch, movie]);
  const renderImages = movie.images && (
    <>
      <Carousel isLoading={isLoading} images={movie.images} />
      <p>{movie.overview}</p>
    </>
  );
  const renderActors = movie.credits && <Actors credits={movie.credits} />;
  return (
    <Expandable expand={activeIndex === index}>
      <Content id="content">
        <Slayt>{renderImages}</Slayt>
        {renderActors}
      </Content>
    </Expandable>
  );
};

export default Detail;
