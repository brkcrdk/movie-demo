import React, { useCallback, useState, useEffect } from "react";
import Search from "../../Search/Search";
import Pages from "../Pages";
import { Container, Desktop, Mobile } from "./NavbarStyle";
import { useDispatch } from "react-redux";
import { toggleSidebar, toggleSearch } from "../../../../store/Toggles/action";
import { Bookmark } from "../../../UI/Icons/Icons";
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
        <Bookmark />
      </Desktop>
      <Mobile>
        <button
          onClick={handleSidebar}
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <i className="fas fa-bars" />
        </button>
        <Search />
        <div>
          {/* <SearchIcon onClick={handleSearch} /> */}
          <Bookmark />
        </div>
      </Mobile>
    </Container>
  );
};

export default Navbar;
