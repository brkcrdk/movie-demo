import { MovieList } from "../serverTypes";

export interface DiscoverState {
  movies: MovieList[];
  isLoading: boolean;
  error: null;
}

export const DISCOVER_FETCH = "DISCOVER_FETCH";
export const DISCOVER_SUCCESS = "DISCOVER_SUCCESS";
export const DISCOVER_ERROR = "DISCOVER_ERROR";

interface DiscoverFetch {
  type: typeof DISCOVER_FETCH;
}
interface DiscoverSuccess {
  type: typeof DISCOVER_SUCCESS;
  payload: MovieList[];
}
interface DiscoverError {
  type: typeof DISCOVER_ERROR;
  error: null;
}

export type DiscoverActions = DiscoverFetch | DiscoverSuccess | DiscoverError;
