import { ADD_FAV, REMOVE_FAV } from "./types";

export const addFav = (movie: {}) => {
  return {
    type: ADD_FAV,
    payload: movie
  };
};
export const removeFav = (movie: {}) => {
  return {
    type: REMOVE_FAV,
    payload: movie
  };
};
