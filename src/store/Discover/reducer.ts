import {
  DISCOVER_ERROR,
  DISCOVER_FETCH,
  DISCOVER_SUCCESS,
  DiscoverActions,
  DiscoverState
} from "./types";

const initialState: DiscoverState = {
  movies: [],
  isLoading: false,
  error: null
};

const discoverReducer = (state = initialState, action: DiscoverActions) => {
  switch (action.type) {
    case DISCOVER_FETCH:
      return { ...state, isLoading: true };
    case DISCOVER_SUCCESS:
      return { ...state, isLoading: false, movies: action.payload };
    case DISCOVER_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default discoverReducer;
