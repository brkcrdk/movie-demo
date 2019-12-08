import { ADD_FAV, REMOVE_FAV, FavActions, FavState } from "./types";

const initialState: FavState = {
  favMovies: []
};

const favReducer = (state = initialState, action: FavActions) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default favReducer;
