import React, { useEffect, useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../../store/Genres/action";
import { addTag } from "../../../store/DiscoverFilter/action";
import { Genre } from "../../../store/serverTypes";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
`;
const DropdownHeader = styled.button`
  background-color: transparent;
  border: 0.3px solid grey;
  padding: 0.5em 2em 0.5em 0.5em;
`;
const DropdownContent = styled.div`
  visibility: ${(p: DropdownContent) => (p.toggle ? "grid" : "none")};
  position: absolute;
  background-color: #f1f1f1;
  max-height: ${(p: DropdownContent) => (p.toggle ? "10em" : "0")};
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  z-index: 1;
  transition: 0.5s;
`;
const DropdownItem = styled(Link)`
  &&& {
  }
`;

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
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const id = parseFloat(e.target.value);
      const name = e.target.options[e.target.selectedIndex].innerHTML;
      dispatch(addTag([{ name: name, id: id }]));
    },
    [dispatch]
  );

  return (
    <Dropdown ref={btnRef}>
      <DropdownHeader onClick={handleToggle}>Choose Genre</DropdownHeader>
      <DropdownContent toggle={toggle}>
        <p>Burak</p>
        <p>Burak</p>
        <p>Burak</p>
        <p>Burak</p>
        <p>Burak</p>
        <p>Burak</p>
        <p>Burak</p>
        <p>Burak</p>
        <p>Burak</p>
        <p>Burak</p>
        <p>Burak</p>
        {/* <DropdownItem to="/">Burak</DropdownItem>
        <DropdownItem to="/">Burak</DropdownItem>
        <DropdownItem to="/">Burak</DropdownItem>
        <DropdownItem to="/">Burak</DropdownItem>
        <DropdownItem to="/">Burak</DropdownItem>
        <DropdownItem to="/">Burak</DropdownItem>
        <DropdownItem to="/">Burak</DropdownItem>
        <DropdownItem to="/">Burak</DropdownItem>
        <DropdownItem to="/">Burak</DropdownItem>
        <DropdownItem to="/">Burak</DropdownItem> */}
      </DropdownContent>
      {/* <select onChange={handleChange}>
        <option disabled defaultValue="">
          Choose Genre
        </option>
        {genres !== undefined
          ? genres.map((genre, key) => (
              <option key={key} value={genre.id} id={genre.name}>
                {genre.name}
              </option>
            ))
          : ""}
      </select> */}
    </Dropdown>
  );
};

export default Selectbox;
