import { ADD_TAG, REMOVE_TAG, DiscoverTagActions, FilterState } from "./types";

const initialState: FilterState = {
  tags: []
};

const filterReducer = (state = initialState, action: DiscoverTagActions) => {
  switch (action.type) {
    case ADD_TAG:
      return { ...state, tags: state.tags.concat(action.payload) };
    default:
      return state;
  }
};
export default filterReducer;
