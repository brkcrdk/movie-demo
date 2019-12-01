import { SEARCH_TOGGLE, SIDEBAR_TOGGLE } from "./types";

export const toggleSidebar = () => {
  return {
    type: SIDEBAR_TOGGLE
  };
};
export const toggleSearch = () => {
  return {
    type: SEARCH_TOGGLE
  };
};
