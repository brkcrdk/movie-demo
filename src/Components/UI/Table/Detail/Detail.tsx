import React from "react";
import { Expandable, Content } from "./DetailStyle";
import { useSelector } from "react-redux";
import { IDetail } from "../../../../store/serverTypes";
import { imgUrl } from "../../../../config";
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
//TODO: React-Slick sil
const Detail: React.FC<Props> = ({ activeIndex, index }) => {
  const movie = useSelector((state: StoreProps) => state.detailStore.movie);
  const isLoading = useSelector(
    (state: StoreProps) => state.detailStore.isLoading
  );

  const renderImages = movie.images;

  return (
    <Expandable expand={activeIndex === index}>
      <Content>
        <div>Slayt</div>
        <div>Actors</div>
      </Content>
    </Expandable>
  );
};

export default Detail;
