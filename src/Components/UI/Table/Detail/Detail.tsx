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
const Detail: React.FC<Props> = ({ activeIndex, index }) => {
  const movie = useSelector((state: StoreProps) => state.detailStore.movie);
  const isLoading = useSelector(
    (state: StoreProps) => state.detailStore.isLoading
  );

  const renderImages = movie.images;
  // ? movie.images.posters.map((item, key) => (
  //     <img
  //       style={{ width: "5em", height: "5em" }}
  //       src={`${imgUrl}/w500${item.file_path}`}
  //     />
  //   ))
  // : "";
  return (
    <Expandable>
      <Content expand={activeIndex === index}>
        {/* <div>{isLoading ? "Loading.." : renderImages}</div> */}
        <div>Actors</div>
      </Content>
    </Expandable>
  );
};

export default Detail;
