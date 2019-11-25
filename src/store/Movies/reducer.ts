import {
  MOVIES_ERROR,
  MOVIES_FETCH,
  MOVIES_SUCCESS,
  MoviesState,
  MoviesActions
} from "./types";

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null
};

const moviesReducer = (state = initialState, action: MoviesActions) => {
  switch (action.type) {
    case MOVIES_FETCH:
      return { ...state, isLoading: true };
    case MOVIES_SUCCESS:
      return { ...state, isLoading: false, movies: action.payload };
    case MOVIES_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default moviesReducer;
