export interface ToggleState {
  sidebar: boolean;
  search: boolean;
  slaytGrid: number;
}

export const SEARCH_TOGGLE = "SEARCH_TOGGLE";
export const SIDEBAR_TOGGLE = "SIDEBAR_TOGGLE";
export const SLAYT_GRID = "SLAYT_GRID";
interface SearchToggle {
  type: typeof SEARCH_TOGGLE;
}

interface SidebarToggle {
  type: typeof SIDEBAR_TOGGLE;
}
interface SlaytGrid {
  type: typeof SLAYT_GRID;
  payload: number;
}
export type ToggleActions = SearchToggle | SidebarToggle | SlaytGrid;
