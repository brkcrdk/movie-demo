import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDiscover } from "../../../store/Discover/action";
interface Props {
  name: string;
  sort_option: string;
  activePage: number;
}

const SortBtn: React.FC<Props> = ({ name, sort_option, activePage }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(fetchDiscover(activePage, `sort_by=${sort_option}`));
  }, [dispatch]);
  return (
    <Link to="/" onClick={handleClick}>
      {name}
    </Link>
  );
};

export default SortBtn;
