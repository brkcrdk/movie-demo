import React from "react";
import { Expandable, Content } from "./DetailStyle";
interface Props {
  expand: boolean;
}

const Detail: React.FC<Props> = ({ expand }) => {
  return (
    <Expandable>
      <Content expand={expand}>goes here..</Content>
    </Expandable>
  );
};

export default Detail;
