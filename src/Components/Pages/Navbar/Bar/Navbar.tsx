import React, { useCallback } from "react";
import Search from "../../Search/Search";
import Pages from "../Pages";
import { Container, Desktop, Mobile } from "./NavbarStyle";
import { useDispatch } from "react-redux";
import { toggleSidebar, toggleSearch } from "../../../../store/Toggles/action";
import { Bookmark, ToggleIcons } from "../../../UI/Icons/Icons";
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
        <ToggleIcons icon="bars" onClick={handleSidebar} />
        <Search />
        <div>
          <ToggleIcons icon="search" onClick={handleSearch} />
          <Bookmark />
        </div>
      </Mobile>
    </Container>
  );
};

export default Navbar;
