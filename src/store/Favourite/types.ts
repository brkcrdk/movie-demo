import { MovieInfo } from "../serverTypes";

export interface FavState {
  favMovies: {
    movie: MovieInfo;
  }[];
}

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

interface AddFav {
  type: typeof ADD_FAV;
  payload: { movie: MovieInfo };
}
interface RemoveFav {
  type: typeof REMOVE_FAV;
  payload: { movie: MovieInfo };
}

export type FavActions = AddFav | RemoveFav;
