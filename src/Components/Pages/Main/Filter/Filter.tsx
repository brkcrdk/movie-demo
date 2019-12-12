import React, { useState } from "react";
import Sort from "../../Main/Filters/Sort/Sort";
import { Container, Mobile, Desktop } from "./FilterStyle";
import { ToggleIcons } from "../../../UI/Icons/Icons";
interface Props {
  activePage: number;
}
const Filters: React.FC<Props> = ({ activePage }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const filterIconStyle = {
    position: "fixed",
    zIndex: "1",
    right: "1em",
    top: "5.5em"
  };
  return (
    <Container>
      <Desktop>
        <Sort activePage={activePage} />
      </Desktop>
      <Mobile toggle={toggle}>
        <Sort activePage={activePage} />
        <ToggleIcons
          onClick={handleToggle}
          icon="filter"
          style={filterIconStyle}
        />
      </Mobile>
    </Container>
  );
};

export default Filters;
