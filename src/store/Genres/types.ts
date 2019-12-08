import { IGenre } from "../serverTypes";

export interface GenreState {
  genre: IGenre[];
  isLoading: boolean;
  error: null;
}

export const GENRE_FETCH = "GENRE_FETCH";
export const GENRE_SUCCESS = "GENRE_SUCCESS";
export const GENRE_ERROR = "GENRE_ERROR";

interface GenreFetch {
  type: typeof GENRE_FETCH;
}

interface GenreSuccess {
  type: typeof GENRE_SUCCESS;
  payload: IGenre[];
}

interface GenreError {
  type: typeof GENRE_ERROR;
  error: null;
}

export type GenreActions = GenreSuccess | GenreError | GenreFetch;
