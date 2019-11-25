import { combineReducers } from "redux";

import detailReducer from "./Detail/reducer";
import genreReducer from "./Genres/reducer";
const rootReducer = combineReducers({
  detail: detailReducer,
  genres: genreReducer
});
export default rootReducer;
