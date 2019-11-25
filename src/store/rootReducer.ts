import { combineReducers } from "redux";

import detailReducer from "./Detail/reducer";
import genreReducer from "./Genres/reducer";
import moviesReducer from "./Movies/reducer";
const rootReducer = combineReducers({
  detailStore: detailReducer,
  genreStore: genreReducer,
  moviesStore: moviesReducer
});
export default rootReducer;
