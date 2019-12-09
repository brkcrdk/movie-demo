import React, { useCallback, useEffect, useState } from "react";
import Search from "../../Search/Search";
import Pages from "../Pages";
import { Container, Desktop, Mobile, Icons, Section } from "./NavbarStyle";
import { useDispatch } from "react-redux";
import { toggleSidebar, toggleSearch } from "../../../../store/Toggles/action";
import { Bookmark, ToggleIcons } from "../../../UI/Icons/Icons";
import { useLocation } from "react-router-dom";
interface Props {}

const Navbar: React.FC<Props> = () => {
  const [path, setPath] = useState("discover");
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const pathName = location.pathname;
    if (pathName === "/") {
      setPath("discover");
    } else {
      setPath(pathName.split("/")[2].replace("_", " "));
    }
  }, [location]);

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
        <ToggleIcons icon="bars" onClick={handleSidebar} />
        <Search />
        <Section>
          <span>{path} Movies</span>
        </Section>
        <Icons>
          <ToggleIcons icon="search" onClick={handleSearch} />
          <Bookmark />
        </Icons>
      </Mobile>
    </Container>
  );
};

export default Navbar;
