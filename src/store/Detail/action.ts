import axios from "axios";
import { Dispatch } from "react";
import { apiKey, apiUrl } from "../../apiKey";
import {
  DETAIL_ERROR,
  DETAIL_FETCH,
  DETAIL_SUCCESS,
  DetailActions
} from "./types";

export const fetchDetails = () => {
  const request = axios.get(
    `${apiUrl}/movie?475557&append_to_response=credits&api_key=${apiKey}`
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