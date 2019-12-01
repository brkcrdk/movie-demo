export interface ToggleState {
  sidebar: boolean;
  search: boolean;
}

export const SEARCH_TOGGLE = "SEARCH_TOGGLE";
export const SIDEBAR_TOGGLE = "SIDEBAR_TOGGLE";

interface SearchToggle {
  type: typeof SEARCH_TOGGLE;
}

interface SidebarToggle {
  type: typeof SIDEBAR_TOGGLE;
}

export type ToggleActions = SearchToggle | SidebarToggle;
