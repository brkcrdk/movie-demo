import { ADD_TAG, REMOVE_TAG } from "./types";


export const addTag = (tags: { name: string; id: number }[]) => {
  return {
    type: ADD_TAG,
    payload: tags
  };
};

export const removeTag = (tags: {}[]) => {
  return {
    type: REMOVE_TAG,
    payload: tags
  };
};
