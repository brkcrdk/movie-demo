import { ADD_TAG, REMOVE_TAG, DiscoverTagActions, FilterState } from "./types";

const initialState: FilterState = {
  tags: []
};

const filterReducer = (state = initialState, action: DiscoverTagActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
