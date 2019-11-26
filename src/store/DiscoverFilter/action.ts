import { ADD_TAG, REMOVE_TAG, DiscoverTagActions } from "./types";
import { Genre } from "../serverTypes";

export const addTag = (tags: Genre[]) => {
  return {
    type: ADD_TAG,
    payload: tags
  };
};

export const removeTag = (tags: Genre[]) => {
  return {
    type: REMOVE_TAG,
    payload: tags
  };
};
