import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscover } from "../../../../../store/Discover/action";

interface Props {
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

const SortBtn: React.FC<Props> = ({ activePage }) => {
  const [year, setYear] = useState();
  const [average, setAverage] = useState();
  const [sort, setSort] = useState("");
  const tags = useSelector(
    (state: DiscoverFilter) => state.discoverFilter.tags
  );
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    const ids = tags.map(item => item.id);
    const sortUrl = `sort_by=${sort}&primary_release_date=${year}&vote_average.gte=${average}`;
    dispatch(fetchDiscover(activePage, sortUrl, ...ids));
  }, [dispatch, activePage, sort, tags]);

  return (
    <Link to="/" onClick={handleClick}>
      {name}
    </Link>
  );
};

export default SortBtn;
