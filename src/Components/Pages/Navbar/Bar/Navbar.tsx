import React, { useCallback } from "react";
import Search from "../../Search/Search";
import Pages from "../Pages";
import { Container, Desktop, Mobile, Icons, Section } from "./NavbarStyle";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  toggleSidebar,
  toggleSearch,
  toggleModal
} from "../../../../store/Toggles/action";
import { Bookmark, ToggleIcons } from "../../../UI/Icons/Icons";
interface Props {}
interface ToggleProps {
  toggle: {
    mobileSection: string;
    modal: boolean;
  };
}
const Navbar: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const section = useSelector(
    (state: ToggleProps) => state.toggle.mobileSection
  );
  const modalToggle = useSelector((state: ToggleProps) => state.toggle.modal);
  const handleSidebar = useCallback(() => {
    dispatch(toggleSidebar());
    if (modalToggle) {
      dispatch(toggleModal());
      history.goBack();
    }
  }, [dispatch, modalToggle]);
  const handleSearch = useCallback(() => {
    dispatch(toggleSearch());
    if (modalToggle) {
      dispatch(toggleModal());
      history.goBack();
    }
  }, [dispatch, modalToggle]);
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
