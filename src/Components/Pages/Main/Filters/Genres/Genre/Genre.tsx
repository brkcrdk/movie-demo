import React, { useEffect, useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../../../../../store/Genres/action";
import { addTag } from "../../../../../../store/DiscoverFilter/action";
import { Genre } from "../../../../../../store/serverTypes";
import styled from "styled-components";
import { device, colours } from "../../../../../../utils";
import GenreTags from "../Tags/GenreTags";
interface Props {}
interface GenreProps {
  genreStore: {
    genre: {
      genres: Genre[];
    };
  };
}

interface DropdownContent {
  toggle: boolean;
}
const Dropdown = styled.div`
  position: relative;

  @media ${device.mobileS} {
    width: 100%;
    margin-top: 1em;
  }
  @media ${device.mobileTablet} {
    width: 15em;
    margin-top: 0;
  }
`;
const DropdownHeader = styled.button`
  display: flex;
  justify-content: space-between;
  width: 96%;
  background-color: transparent;
  border: 0.3px solid grey;
  padding: 0.5em;
`;

const DropdownContent = styled.div`
  visibility: ${(p: DropdownContent) => (p.toggle ? "visible" : "hidden")};
  display: grid;
  align-items: center;
  position: absolute;
  max-height: ${(p: DropdownContent) => (p.toggle ? "50vh" : "0")};
  transition: max-height 0.2s ease-in-out;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 96%;
  z-index: 2;
  border: 1px solid dodgerblue;
`;
const DropdownItem = styled.a`
  padding-left: 0.5em;
  padding-top: 0.3em;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: dodgerblue;
  }
`;

const Label = styled.label`
  margin-bottom: 1em;
`;

const Splitter = styled.hr`
  border: 0.5px solid ${colours.secondaryText};
`;

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

  return (
    <Dropdown ref={btnRef}>
      <Label>Genre:</Label>
      <Splitter />
      <DropdownHeader onClick={handleToggle}>
        <GenreTags /> >
      </DropdownHeader>
      <DropdownContent toggle={toggle}>
        {genres !== undefined
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
          : "Loading.."}
      </DropdownContent>
    </Dropdown>
  );
};

export default Genre;
