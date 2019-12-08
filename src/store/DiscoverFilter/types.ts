import { IGenre } from "../serverTypes";

export interface FilterState {
  tags: IGenre[];
}

export const ADD_TAG = "ADD_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const SORT_BY = "SORT_BY";

interface AddTag {
  type: typeof ADD_TAG;
  payload: IGenre[];
}

interface RemoveTag {
  type: typeof REMOVE_TAG;
  payload: IGenre[];
}
export type DiscoverTagActions = AddTag | RemoveTag;
