export interface ToggleState {
  sidebar: boolean;
  search: boolean;
  actorList: number;
}

export const SEARCH_TOGGLE = "SEARCH_TOGGLE";
export const SIDEBAR_TOGGLE = "SIDEBAR_TOGGLE";
export const ACTOR_LIST = "ACTOR_LIST";
interface SearchToggle {
  type: typeof SEARCH_TOGGLE;
}

interface SidebarToggle {
  type: typeof SIDEBAR_TOGGLE;
}
interface ActorList {
  type: typeof ACTOR_LIST;
  payload: number;
}

export type ToggleActions = SearchToggle | SidebarToggle | ActorList;
