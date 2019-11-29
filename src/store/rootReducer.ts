import { combineReducers } from "redux";

import detailReducer from "./Detail/reducer";
import genreReducer from "./Genres/reducer";
import keywordReducer from "./Keywords/reducer";
import moviesReducer from "./Movies/reducer";
import discoverReducer from "./Discover/reducer";
import filterReducer from "./DiscoverFilter/reducer";
const rootReducer = combineReducers({
  detailStore: detailReducer,
  genreStore: genreReducer,
  keywordStore: keywordReducer,
  moviesStore: moviesReducer,
  discoverStore: discoverReducer,
  discoverFilter: filterReducer
});
export default rootReducer;
