import React from "react";
import Button from "./Button";
interface Props {}

const Pages: React.FC<Props> = () => {
  return (
    <div>
      <Button route="now_playing" innerText="Now Playing" />
      <Button route="upcoming" innerText="Upcoming" />
      <Button route="top_rated" innerText="Top Rated" />
      <Button route="popular" innerText="Popular" />
    </div>
  );
};

export default Pages;
