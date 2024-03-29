import axios from "axios";
import { Dispatch } from "react";
import { apiUrl, apiKey } from "../../config";
import {
  DISCOVER_ERROR,
  DISCOVER_FETCH,
  DISCOVER_SUCCESS,
  DiscoverActions
} from "./types";

export const fetchDiscover = (
  page: number = 1,
  sort: string = "",
  ...genres: number[]
) => {
  const request = axios.get(
    `${apiUrl}/discover/movie?&${sort}&with_genres=${genres}&page=${page}&media_type=movie&api_key=${apiKey}`
  );
  return (dispatch: Dispatch<DiscoverActions>) => {
    dispatch({
      type: DISCOVER_FETCH
    });
    request
      .then(({ data }) => {
        dispatch({
          type: DISCOVER_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: DISCOVER_ERROR,
          error: error
        });
      });
  };
};
