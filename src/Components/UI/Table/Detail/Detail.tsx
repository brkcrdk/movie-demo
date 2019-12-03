import React, { useState, useEffect } from "react";
import { Expandable, Content, Slayt, Slide } from "./DetailStyle";
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

  useEffect(() => {
    if (movie.images) {
      setCount(movie.images.backdrops.length);
    }
  }, [movie.images]);

  const [activeImg, setActiveImg] = useState(0);
  const [count, setCount] = useState();
  const handleNext = () => {
    if (activeImg === count - 1) {
      setActiveImg(0);
    } else {
      setActiveImg(activeImg + 1);
    }
  };
  const handlePrev = () => {
    if (activeImg === 0) {
      setActiveImg(count - 1);
    } else {
      setActiveImg(activeImg - 1);
    }
  };
  const renderImages =
    movie.images &&
    movie.images.backdrops.map((image, key) => (
      <Slide
        key={key}
        src={`${imgUrl}/w300${image.file_path}`}
        toggle={key === activeImg}
      />
    ));

  return (
    <Expandable expand={activeIndex === index}>
      <Content id="content">
        <Slayt>
          <button onClick={handlePrev}>Prev</button>
          {isLoading ? "loading" : renderImages}
          <button onClick={handleNext}>Next</button>
        </Slayt>
        <div>Actors</div>
      </Content>
    </Expandable>
  );
};

export default Detail;
