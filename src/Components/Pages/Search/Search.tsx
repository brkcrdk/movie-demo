import React from "react";
import { useSelector } from "react-redux";
import { Container, Mobile, Desktop } from "./SearchStyle";
import SearchInput from "./SearchInput";
interface Props {}

interface ToggleStore {
  toggle: {
    search: boolean;
  };
}

const Search: React.FC<Props> = () => {
  const toggle = useSelector((state: ToggleStore) => state.toggle.search);
  return (
    <Container>
      <Mobile toggle={toggle}>
        <SearchInput />
      </Mobile>
      <Desktop>
        <SearchInput />
      </Desktop>
    </Container>
  );
};

export default Search;
