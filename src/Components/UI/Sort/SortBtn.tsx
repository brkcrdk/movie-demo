import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscover } from "../../../store/Discover/action";

interface Props {
  name: string;
  sort_option: string;
  activePage: number;
}

interface DiscoverFilter {
  discoverFilter: {
    tags: {
      id: number;
      name: string;
    }[];
  };
}

const SortBtn: React.FC<Props> = ({ name, sort_option, activePage }) => {
  const [toggle, setToggle] = useState(false);
  const tags = useSelector(
    (state: DiscoverFilter) => state.discoverFilter.tags
  );
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    const ids = tags.map(item => item.id);
    dispatch(fetchDiscover(activePage, `sort_by=${sort_option}`, ...ids));
    setToggle(!toggle);
  }, [dispatch, activePage, sort_option, tags, toggle]);
  console.log(toggle);
  return (
    <Link to="/" onClick={handleClick}>
      {name} ~ {toggle ? "yukarı" : "aşşa"}
    </Link>
  );
};

export default SortBtn;
