import React from "react";
import { Expandable, Content } from "./DetailStyle";
interface Props {
  expand: boolean;
}

const Detail: React.FC<Props> = ({ expand }) => {
  return (
    <Expandable expand={expand}>
      <Content>goes here..</Content>
    </Expandable>
  );
};

export default Detail;
