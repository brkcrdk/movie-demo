import {
  GenreActions,
  GenreState,
  GENRE_ERROR,
  GENRE_FETCH,
  GENRE_SUCCESS
} from "./types";

const initialState: GenreState = {
  genre: [],
  isLoading: false,
  error: null
};

const genreReducer = (state = initialState, action: GenreActions) => {
  switch (action.type) {
    case GENRE_FETCH:
      return { ...state, isLoading: true };
    case GENRE_SUCCESS:
      return { ...state, isLoading: false, genre: action.payload };
    case GENRE_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default genreReducer;
