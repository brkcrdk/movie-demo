import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscover } from "../../../../../store/Discover/action";
import { sortOptions, years, voteAvg } from "./sortOptions";
import Selectbox from "../../../../UI/Selectbox";
import styled from "styled-components";
import { device } from "../../../../../utils";
import Genres from "../Genres/Genres";
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

const Container = styled.div`
  width: 100%;
  background-color: white;
  position: fixed;
  padding-bottom: 1em;
  padding-top: 1.5em;

  @media ${device.mobileS} {
    display: grid;
    grid-template-columns: 12fr;
    align-items: flex-start;
    margin-top: -2.6em;
    z-index: 1;
    #genreWrap {
      margin-left: 1em;
    }
  }
  @media ${device.mobileTablet} {
    grid-template-columns: repeat(2, 6fr);
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 0.9em;
    z-index: 1;
  }
`;

const SortBtn: React.FC<Props> = ({ activePage }) => {
  const [year, setYear] = useState("0");
  const [average, setAverage] = useState("0");
  const [sort, setSort] = useState("primary_release_date.asc");
  const tags = useSelector(
    (state: DiscoverFilter) => state.discoverFilter.tags
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const ids = tags.map(item => item.id);
    const sortUrl = `sort_by=${sort}&primary_release_year=${year}&vote_average.gte=${average}`;
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
    <Container>
      <Selectbox options={years()} label="Year" onChange={handleYear} />
      <Selectbox
        options={voteAvg()}
        label="IMDB Avg."
        onChange={handleAverage}
      />
      <Selectbox options={sortOptions} label="Sort By" onChange={handleSort} />
      <div id="genreWrap">
        <Genres />
      </div>
    </Container>
  );
};

export default SortBtn;
