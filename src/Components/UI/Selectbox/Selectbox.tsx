import React, { useEffect, useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../../store/Genres/action";
import { addTag } from "../../../store/DiscoverFilter/action";
import { Genre } from "../../../store/serverTypes";
import styled from "styled-components";
import { device } from "../../../utils";
import Filters from "../Filters/Filters";
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
  display: inline-block;
  @media ${device.mobileS} {
    width: 10em;
  }
  @media ${device.mobileTablet} {
    width: 15em;
  }
`;
const DropdownHeader = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  border: 0.3px solid grey;
  padding: 1em 0.5em;
`;

const DropdownContent = styled.div`
  visibility: ${(p: DropdownContent) => (p.toggle ? "visible" : "hidden")};
  display: grid;
  position: absolute;
  background-color: #f1f1f1;
  max-height: ${(p: DropdownContent) => (p.toggle ? "10em" : "0")};
  transition: max-height 0.5s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  z-index: 1;
`;
const DropdownItem = styled.a``;

const Selectbox: React.FC<Props> = () => {
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
      <DropdownHeader onClick={handleToggle}>
        <Filters /> >
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

export default Selectbox;
