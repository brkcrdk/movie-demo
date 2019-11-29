import {
  ADD_TAG,
  REMOVE_TAG,
  DiscoverTagActions,
  FilterState,
  SORT_BY
} from "./types";

const initialState: FilterState = {
  tags: []
};

const filterReducer = (state = initialState, action: DiscoverTagActions) => {
  switch (action.type) {
    case ADD_TAG:
      if (
        state.tags.filter(item => item.id === action.payload[0].id).length > 0
      ) {
        return state;
      } else {
        return { ...state, tags: state.tags.concat(action.payload) };
      }
    case REMOVE_TAG:
      if (
        state.tags.filter(item => item.id === action.payload[0].id).length > 0
      ) {
        return {
          ...state,
          tags: state.tags.filter(item => item.id !== action.payload[0].id)
        };
      }
      return state;
    default:
      return state;
  }
};
export default filterReducer;
