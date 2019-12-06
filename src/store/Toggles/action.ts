import { SEARCH_TOGGLE, SIDEBAR_TOGGLE, ACTOR_LIST } from "./types";

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
export const actorList = (index: number) => {
  return {
    type: ACTOR_LIST,
    payload: index
  };
};
