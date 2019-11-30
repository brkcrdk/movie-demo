import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscover } from "../../../../../store/Discover/action";
import { sortOptions, years, voteAvg } from "./sortOptions";
import Selectbox from "../../../../UI/Selectbox";

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
  const [year, setYear] = useState(1900);
  const [average, setAverage] = useState(0);
  const [sort, setSort] = useState("popularity.desc");
  const tags = useSelector(
    (state: DiscoverFilter) => state.discoverFilter.tags
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const ids = tags.map(item => item.id);
    const sortUrl = `sort_by=${sort}&primary_release_date=${year}&vote_average.gte=${average}`;
    dispatch(fetchDiscover(activePage, sortUrl, ...ids));
  }, [dispatch, activePage, year, average, sort, tags]);

  return (
    <div>
      <Selectbox options={years()} label="Year" />
      <Selectbox options={voteAvg()} label="IMDB Avg." />
      <Selectbox options={sortOptions} label="Sort By" />
    </div>
  );
};

export default SortBtn;
