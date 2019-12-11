import {
  ToggleActions,
  ToggleState,
  SEARCH_TOGGLE,
  SIDEBAR_TOGGLE,
  SLAYT_GRID,
  MOBILE_SECTION
} from "./types";

const initialState: ToggleState = {
  search: false,
  sidebar: false,
  slaytGrid: -1,
  mobileSection: "discover"
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
    case SLAYT_GRID:
      return { ...state, slaytGrid: action.payload };
    case MOBILE_SECTION:
      const section = action.payload.replace("_", " ");
      return { ...state, mobileSection: section };
    default:
      return state;
  }
};

export default toggleReducer;
