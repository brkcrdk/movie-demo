import { combineReducers } from "redux";

import detailReducer from "./Detail/reducer";
import genreReducer from "./Genres/reducer";
import moviesReducer from "./Movies/reducer";
import discoverReducer from "./Discover/reducer";
import filterReducer from "./DiscoverFilter/reducer";
import toggleReducer from "./Toggles/reducer";
const rootReducer = combineReducers({
  detailStore: detailReducer,
  genreStore: genreReducer,
  moviesStore: moviesReducer,
  discoverStore: discoverReducer,
  discoverFilter: filterReducer,
  toggle: toggleReducer
});
export default rootReducer;
