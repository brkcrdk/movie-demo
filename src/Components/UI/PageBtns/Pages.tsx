import React from "react";
import Button from "./Button";
interface Props {}

const Pages: React.FC<Props> = () => {
  return (
    <div>
      <Button route="now_playing" innerText="Now Playing" />
    </div>
  );
};

export default Pages;
