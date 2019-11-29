import React from "react";
import { Genre } from "../../../store/serverTypes";
import { fetchGenres } from "../../../store/Genres/action";
import { addTag } from "../../../store/DiscoverFilter/action";
interface Props {}
interface GenreProps {
  genreStore: {
    genre: {
      genres: Genre[];
    };
  };
}
const Filters: React.FC<Props> = () => {
  return <div></div>;
};

export default Filters;
