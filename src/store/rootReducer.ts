import { combineReducers } from "redux";

import detailReducer from "./Detail/reducer";

const rootReducer = combineReducers({
  detail: detailReducer
});
export default rootReducer;
