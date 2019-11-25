import axios from "axios";
import { Dispatch } from "react";
import { apiUrl, apiKey } from "../../config";

import {
  MOVIES_ERROR,
  MOVIES_FETCH,
  MOVIES_SUCCESS,
  MoviesActions
} from "./types";

export const fetchMovies = (option: string) => {
  const request = axios.get(
    `${apiUrl}/movie/${option}?language=en-US&page=1&api_key=${apiKey}`
  );

  return (dispatch: Dispatch<MoviesActions>) => {
    dispatch({
      type: MOVIES_FETCH
    });
    request
      .then(({ data }) => {
        dispatch({
          type: MOVIES_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: MOVIES_ERROR,
          error: error
        });
      });
  };
};
