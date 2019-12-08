import React, { useCallback, useState, useEffect } from "react";
import Search from "../../Search/Search";
import Pages from "../Pages";
import { Container, Desktop, Mobile } from "./NavbarStyle";
import { useDispatch } from "react-redux";
import { toggleSidebar, toggleSearch } from "../../../../store/Toggles/action";
interface Props {}

const Navbar: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const handleSidebar = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);
  const handleSearch = useCallback(() => {
    dispatch(toggleSearch());
  }, [dispatch]);
  return (
    <Container>
      <Desktop>
        <Pages />
        <Search />
      </Desktop>
      <Mobile>
        <button onClick={handleSidebar}>X</button>
        <Search />
        <button onClick={handleSearch}>Search</button>
      </Mobile>
    </Container>
  );
};

export default Navbar;
