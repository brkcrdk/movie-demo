import axios from "axios";
import { Dispatch } from "react";
import { apiKey, apiUrl } from "../../config";

import {
  DETAIL_ERROR,
  DETAIL_FETCH,
  DETAIL_SUCCESS,
  DetailActions
} from "./types";

export const fetchDetails = (id: number) => {
  const request = axios.get(
    `${apiUrl}/movie/${id}?append_to_response=credits,images,videos,similar&api_key=${apiKey}`
  );

  return (dispatch: Dispatch<DetailActions>) => {
    dispatch({
      type: DETAIL_FETCH
    });
    request
      .then(({ data }) => {
        dispatch({
          type: DETAIL_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: DETAIL_ERROR,
          error: error
        });
      });
  };
};
