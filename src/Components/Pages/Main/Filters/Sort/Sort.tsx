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
  const [year, setYear] = useState("2017");
  const [average, setAverage] = useState("0");
  const [sort, setSort] = useState("primariy_release_date.asc");
  const tags = useSelector(
    (state: DiscoverFilter) => state.discoverFilter.tags
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const ids = tags.map(item => item.id);
    const sortUrl = `sort_by=${sort}&primary_release_date=${year}&vote_average.gte=${average}`;
    dispatch(fetchDiscover(activePage, sortUrl, ...ids));
  }, [dispatch, activePage, year, average, sort, tags]);

  const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.options[e.target.selectedIndex].value);
  };
  const handleAverage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAverage(e.target.options[e.target.selectedIndex].value);
  };
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.options[e.target.selectedIndex].value);
  };
  return (
    <div>
      <Selectbox options={years()} label="Year" onChange={handleYear} />
      <Selectbox
        options={voteAvg()}
        label="IMDB Avg."
        onChange={handleAverage}
      />
      <Selectbox options={sortOptions} label="Sort By" onChange={handleSort} />
    </div>
  );
};

export default SortBtn;
