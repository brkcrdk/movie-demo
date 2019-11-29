import { ADD_TAG, REMOVE_TAG, SORT_BY } from "./types";

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

export const sortBy = (sort: string) => {
  return {
    type: SORT_BY,
    payload: sort
  };
};
