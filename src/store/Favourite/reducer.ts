import { ADD_FAV, REMOVE_FAV, FavActions, FavState } from "./types";

const initialState: FavState = {
  favMovies: []
};

const favReducer = (state = initialState, action: FavActions) => {
  switch (action.type) {
    case ADD_FAV:
      if (state.favMovies.length >= 0) {
        const id = state.favMovies.map(item => item.movie.id);
        if (id.indexOf(action.payload.movie.id) === -1) {
          return {
            ...state,
            favMovies: state.favMovies.concat(action.payload)
          };
        }
      }
    case REMOVE_FAV:
      if (state.favMovies.length >= 0) {
        const id = state.favMovies.map(item => item.movie.id);
        if (id.indexOf(action.payload.movie.id) !== -1) {
          return {
            ...state,
            favMovies: state.favMovies.filter(item => {
              return item.movie.id !== action.payload.movie.id;
            })
          };
        }
      }
    default:
      return state;
  }
};

export default favReducer;
