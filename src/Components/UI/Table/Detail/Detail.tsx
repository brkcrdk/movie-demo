import React, { useState } from "react";
import { Expandable, Content } from "./DetailStyle";
interface Props {
  activeIndex: number;
  index: number;
}

const Detail: React.FC<Props> = ({ activeIndex, index }) => {
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
