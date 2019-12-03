import React, { useState, useEffect } from "react";
import { Expandable, Content, Slayt, Slide } from "./DetailStyle";
import { useSelector } from "react-redux";
import { IDetail } from "../../../../store/serverTypes";
import { imgUrl } from "../../../../config";
import Carousel from "../../Carousel/Carousel";

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
    <Carousel isLoading={isLoading} images={movie.images} />
  );

  return (
    <Expandable expand={activeIndex === index}>
      <Content id="content">
        <Slayt>{renderImages}</Slayt>
        <div>Actors</div>
      </Content>
    </Expandable>
  );
};

export default Detail;
