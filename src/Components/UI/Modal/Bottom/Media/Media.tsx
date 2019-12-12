import React from "react";
import { ImageProps, VideoProps } from "../../../../../store/serverTypes";
interface Props {
  backdrops: ImageProps[];
  posters: ImageProps[];
  videos: VideoProps[];
}

const Media: React.FC<Props> = ({ posters, backdrops, videos }) => {
  return <div></div>;
};

export default Media;
