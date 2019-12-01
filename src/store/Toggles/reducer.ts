import {
  ToggleActions,
  ToggleState,
  SEARCH_TOGGLE,
  SIDEBAR_TOGGLE
} from "./types";

const initialState: ToggleState = {
  search: false,
  sidebar: false
};

const togglReducer = (state = initialState, action: ToggleActions) => {
  switch (action.type) {
    case SEARCH_TOGGLE:
      return { ...state, search: !state.search };
    case SIDEBAR_TOGGLE:
      return { ...state, sidebar: !state.sidebar };
    default:
      return state;
  }
};
