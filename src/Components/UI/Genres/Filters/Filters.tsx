import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTag } from "../../../../store/DiscoverFilter/action";
import { Container, TagWrapper, TagButton, TagName } from "./FilterStyle";

interface Props {}
interface FiltersProps {
  discoverFilter: {
    tags: {
      name: string;
      id: number;
    }[];
  };
}
const Filters: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const handleRemove = useCallback(
    (name: string, id: number) => {
      dispatch(removeTag([{ name: name, id: id }]));
    },
    [dispatch]
  );
  const filter = useSelector(
    (state: FiltersProps) => state.discoverFilter.tags
  );

  const renderFilters = filter.map((filter, i) => (
    <TagWrapper key={i}>
      <TagName>{filter.name}</TagName>
      <TagButton
        onClick={() => {
          handleRemove(filter.name, filter.id);
        }}
      >
        X
      </TagButton>
    </TagWrapper>
  ));
  return (
    <Container>{filter.length > 0 ? renderFilters : "Choose Genre"}</Container>
  );
};

export default Filters;
