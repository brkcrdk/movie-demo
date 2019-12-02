import React, { useEffect } from "react";
import Slider from "react-slick";
import { Expandable, Content } from "./DetailStyle";
import { useDispatch, useSelector } from "react-redux";
interface Props {
  activeIndex: number;
  index: number;
}

const Detail: React.FC<Props> = ({ activeIndex, index }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <Expandable>
      <Content expand={activeIndex === index}>
        <div>
          <Slider></Slider>
        </div>
        <div>Actors</div>
      </Content>
    </Expandable>
  );
};

export default Detail;
