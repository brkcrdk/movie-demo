import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscover } from "../../../../../store/Discover/action";
import { sortOptions } from "./sortOptions";
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
  const [year, setYear] = useState();
  const [average, setAverage] = useState();
  const [sort, setSort] = useState("");
  const tags = useSelector(
    (state: DiscoverFilter) => state.discoverFilter.tags
  );
  const dispatch = useDispatch();

  // const handleClick = useCallback(() => {
  //   const ids = tags.map(item => item.id);
  //   const sortUrl = `sort_by=${sort}&primary_release_date=${year}&vote_average.gte=${average}`;
  //   dispatch(fetchDiscover(activePage, sortUrl, ...ids));
  // }, [dispatch, activePage, sort, tags]);

  const years = [];
  for (let i = 1900; i < 2021; i++) {
    years.unshift({ value: i.toString(), text: i.toString() });
  }
  const voteAverage = [];
  for (let i = 0; i < 11; i++) {
    voteAverage.push({ value: i, text: i });
  }

  return (
    <div>
      <Selectbox options={years} label="Year" />
      <Selectbox options={voteAverage} label="IMDB Avg." />
      <Selectbox options={sortOptions} label="Sort By" />
    </div>
  );
};

export default SortBtn;
