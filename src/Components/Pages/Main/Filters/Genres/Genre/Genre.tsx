import React, { useEffect, useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../../../../../store/Genres/action";
import { addTag } from "../../../../../../store/DiscoverFilter/action";
import { IGenre } from "../../../../../../store/serverTypes";
import {
  Dropdown,
  DropdownContent,
  DropdownHeader,
  Label,
  Splitter,
  DropdownItem
} from "./GenreStyle";

import GenreTags from "../Tags/GenreTags";
interface Props {}
interface GenreProps {
  genreStore: {
    genre: {
      genres: IGenre[];
    };
  };
}

const Genre: React.FC<Props> = () => {
  const [toggle, setToggle] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  function useOutsideAlerter(ref: any) {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }

  useOutsideAlerter(btnRef);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const genres = useSelector(
    (state: GenreProps) => state.genreStore.genre.genres
  );
  const handleChange = useCallback(
    (name: string, id: number) => {
      dispatch(addTag([{ name: name, id: id }]));
    },
    [dispatch]
  );

  const renderGenres =
    genres &&
    genres.map((genre, key) => (
      <DropdownItem
        key={key}
        onClick={() => {
          handleChange(genre.name, genre.id);
        }}
      >
        {genre.name}
      </DropdownItem>
    ));

  return (
    <Dropdown ref={btnRef}>
      <Label>Genre:</Label>
      <Splitter />
      <DropdownHeader onClick={handleToggle}>
        <GenreTags /> >
      </DropdownHeader>
      <DropdownContent toggle={toggle}>
        {renderGenres}
        {/* {genres !== undefined
          ? genres.map((genre, key) => (
              <DropdownItem
                key={key}
                onClick={() => {
                  handleChange(genre.name, genre.id);
                }}
              >
                {genre.name}
              </DropdownItem>
            ))
          : "Loading.."} */}
      </DropdownContent>
    </Dropdown>
  );
};

export default Genre;
