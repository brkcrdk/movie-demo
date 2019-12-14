export interface ToggleState {
  sidebar: boolean;
  search: boolean;
  slaytGrid: number;
  mobileSection: string;
  modal: boolean;
}

export const SEARCH_TOGGLE = "SEARCH_TOGGLE";
export const SIDEBAR_TOGGLE = "SIDEBAR_TOGGLE";
export const SLAYT_GRID = "SLAYT_GRID";
export const MOBILE_SECTION = "MOBILE_SECTION";
export const MODAL_TOGGLE = "MODAL_TOGGLE";
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
interface MobileSection {
  type: typeof MOBILE_SECTION;
  payload: string;
}
interface ModalToggle {
  type: typeof MODAL_TOGGLE;
}
export type ToggleActions =
  | SearchToggle
  | SidebarToggle
  | SlaytGrid
  | MobileSection
  | ModalToggle;
