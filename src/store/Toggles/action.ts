import {
  SEARCH_TOGGLE,
  SIDEBAR_TOGGLE,
  SLAYT_GRID,
  MOBILE_SECTION
} from "./types";

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
export const toggleSlaytGrid = (index: number) => {
  return {
    type: SLAYT_GRID,
    payload: index
  };
};
export const toggleSection = (section: string) => {
  return {
    type: MOBILE_SECTION,
    payload: section
  };
};
