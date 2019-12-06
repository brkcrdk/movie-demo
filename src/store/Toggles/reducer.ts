import {
  ToggleActions,
  ToggleState,
  SEARCH_TOGGLE,
  SIDEBAR_TOGGLE,
  ACTOR_LIST
} from "./types";

const initialState: ToggleState = {
  search: false,
  sidebar: false,
  actorList: -1
};

const toggleReducer = (state = initialState, action: ToggleActions) => {
  switch (action.type) {
    case SEARCH_TOGGLE:
      if (state.sidebar === true) {
        return { ...state, search: !state.search, sidebar: false };
      }
      return { ...state, search: !state.search };
    case SIDEBAR_TOGGLE:
      if (state.search === true) {
        return { ...state, sidebar: !state.sidebar, search: false };
      }
      return { ...state, sidebar: !state.sidebar };
    case ACTOR_LIST:
      return { ...state, actorList: action.payload };
    default:
      return state;
  }
};

export default toggleReducer;
