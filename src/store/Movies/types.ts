import { MovieList } from "../serverTypes";

export interface MoviesState {
  movies: MovieList[];
  isLoading: boolean;
  error: null;
}
export const MOVIES_FETCH = "MOVIES_FETCH";
export const MOVIES_SUCCESS = "MOVIES_SUCCESS";
export const MOVIES_ERROR = "MOVIES_ERROR";

interface MoviesFetch {
  type: typeof MOVIES_FETCH;
}

interface MoviesSuccess {
  type: typeof MOVIES_SUCCESS;
  payload: MovieList[];
}

interface MoviesError {
  type: typeof MOVIES_ERROR;
  error: null;
}
export type MoviesActions = MoviesError | MoviesFetch | MoviesSuccess;
