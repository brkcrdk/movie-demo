import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeTag } from "../../../store/DiscoverFilter/action";
interface Props {
  filter: {
    name: string;
    id: number;
  }[];
}

const Filters: React.FC<Props> = ({ filter }) => {
  const dispatch = useDispatch();
  const handleRemove = useCallback(() => {}, [dispatch]);
  const renderFilters = filter.map(filter => (
    <div>
      {filter.name}
      <button>X</button>
    </div>
  ));
  return <div>{filter.length > 0 ? renderFilters : ""}</div>;
};

export default Filters;
