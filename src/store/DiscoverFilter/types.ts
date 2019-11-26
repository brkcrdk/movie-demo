import { Genre } from "../serverTypes";

export interface FilterState {
  tags: Genre[];
}

export const ADD_TAG = "ADD_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

interface AddTag {
  type: typeof ADD_TAG;
  payload: Genre[];
}

interface RemoveTag {
  type: typeof REMOVE_TAG;
  payload: Genre[];
}

export type DiscoverTagActions = AddTag | RemoveTag;