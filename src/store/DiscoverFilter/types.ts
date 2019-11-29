import { Genre } from "../serverTypes";

export interface FilterState {
  tags: Genre[];
  sort: "";
}

export const ADD_TAG = "ADD_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const SORT_BY = "SORT_BY";

interface AddTag {
  type: typeof ADD_TAG;
  payload: Genre[];
}

interface RemoveTag {
  type: typeof REMOVE_TAG;
  payload: Genre[];
}
interface SortBy {
  type: typeof SORT_BY;
  payload: string;
}
export type DiscoverTagActions = AddTag | RemoveTag | SortBy;
