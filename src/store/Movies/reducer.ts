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
    default:
      return state;
  }
};
