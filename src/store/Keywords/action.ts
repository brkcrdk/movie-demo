import axios from "axios";
import { Dispatch } from "react";
import { apiKey, apiUrl } from "../../config";
import {
  KEYWORD_ERROR,
  KEYWORD_FETCH,
  KEYWORD_SUCCESS,
  KeywordActions
} from "./types";

export const fetchGenres = () => {
  const request = axios.get(`${apiUrl}/genre/movie/list?api_key=${apiKey}`);

  return (dispatch: Dispatch<KeywordActions>) => {
    dispatch({
      type: KEYWORD_FETCH
    });
    request
      .then(({ data }) => {
        dispatch({
          type: KEYWORD_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: KEYWORD_ERROR,
          error: error
        });
      });
  };
};
