import React, { useCallback, useEffect, useState } from "react";
import Search from "../../Search/Search";
import Pages from "../Pages";
import { Container, Desktop, Mobile, Icons, Section } from "./NavbarStyle";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleSearch } from "../../../../store/Toggles/action";
import { Bookmark, ToggleIcons } from "../../../UI/Icons/Icons";
import { useLocation } from "react-router-dom";
interface Props {}
interface ToggleProps {
  toggle: {
    mobileSection: string;
  };
}
const Navbar: React.FC<Props> = () => {
  const [path, setPath] = useState("discover");
  const location = useLocation();
  const dispatch = useDispatch();
  const section = useSelector(
    (state: ToggleProps) => state.toggle.mobileSection
  );
  useEffect(() => {
    // const pathName = location.pathname;
    // if (pathName === "/") {
    //   setPath("discover");
    // } else if (pathName === "/favourites") {
    //   setPath("favourite");
    // } else {
    //   setPath(pathName.split("/")[2].replace("_", " "));
    // }
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
          <span>{section}</span>
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
