import React, { useEffect, useState } from "react";
import { ImageProps } from "../../../store/serverTypes";
import { imgUrl } from "../../../config";
import { Container, Slayt, Slide } from "./CarouselStyle";
interface Props {
  images: {
    backdrops: ImageProps[];
    posters: ImageProps[];
  };
  isLoading: boolean;
}

const Carousel: React.FC<Props> = ({ images, isLoading }) => {
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (images) {
      setCount(images.backdrops.length);
    }
  }, [images]);

  const renderImages =
    images &&
    images.backdrops.map((image, key) => (
      <Slide
        key={key}
        src={`${imgUrl}/w300${image.file_path}`}
        toggle={key === active}
      />
    ));
  const handleNext = () => {
    if (active === count - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };
  const handlePrev = () => {
    if (active === 0) {
      setActive(count - 1);
    } else {
      setActive(active - 1);
    }
  };
  return (
    <Container>
      <Slayt>
        <button onClick={handlePrev}>Prev</button>
        {isLoading ? "loading" : renderImages}
        <button onClick={handleNext}>Next</button>
      </Slayt>
    </Container>
  );
};

export default Carousel;
