import axios from "axios";
import { Dispatch } from "react";
import { apiKey, apiUrl } from "../../config";

import { ACTOR_ERROR, ACTOR_FETCH, ACTOR_SUCCESS, ActorActions } from "./types";

export const fetchActor = (id: number) => {
  const request = axios.get(
    `${apiUrl}/person/${id}?api_key=${apiKey}&language=en-US`
  );

  return (dispatch: Dispatch<ActorActions>) => {
    dispatch({
      type: ACTOR_FETCH
    });
    request
      .then(({ data }) => {
        dispatch({
          type: ACTOR_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        dispatch({ type: ACTOR_ERROR, error: error });
      });
  };
};
