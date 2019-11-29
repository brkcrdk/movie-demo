import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sortBy } from "../../../store/DiscoverFilter/action";
interface Props {
  name: string;
  sort_option: string;
}

const SortBtn: React.FC<Props> = ({ name, sort_option }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {}, [dispatch]);
  return <Link to="/">{name}</Link>;
};

export default SortBtn;
