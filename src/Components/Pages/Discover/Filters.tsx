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
  const handleRemove = useCallback(
    (name: string, id: number) => {
      dispatch(removeTag([{ name: name, id: id }]));
    },
    [dispatch]
  );
  const renderFilters = filter.map((filter, i) => (
    <div key={i}>
      {filter.name}
      <button
        onClick={() => {
          handleRemove(filter.name, filter.id);
        }}
      >
        X
      </button>
    </div>
  ));
  return <div>{filter.length > 0 ? renderFilters : ""}</div>;
};

export default Filters;
