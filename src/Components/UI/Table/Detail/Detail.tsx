import React, { useState } from "react";
import { Expandable, Content } from "./DetailStyle";
interface Props {}

const Detail: React.FC<Props> = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Expandable>
      <Content expand={toggle}>goes here..</Content>
    </Expandable>
  );
};

export default Detail;
