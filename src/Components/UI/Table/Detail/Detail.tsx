import React from "react";
import Slider from "react-slick";
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
const Detail: React.FC<Props> = ({ activeIndex, index }) => {
  const movie = useSelector((state: StoreProps) => state.detailStore.movie);

  console.log(movie);

  return (
    <Expandable>
      <Content expand={activeIndex === index}>
        <div>Slayt</div>
        <div>Actors</div>
      </Content>
    </Expandable>
  );
};

export default Detail;
