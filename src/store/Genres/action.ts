import axios from "axios";
import { Dispatch } from "react";
import { apiKey, apiUrl } from "../../config";
import { GENRE_ERROR, GENRE_FETCH, GENRE_SUCCESS, GenreActions } from "./types";

export const fetchGenres = () => {
  const request = axios.get(`${apiUrl}/genre/movie/list?api_key=${apiKey}`);

  return (dispatch: Dispatch<GenreActions>) => {
    dispatch({
      type: GENRE_FETCH
    });
    request
      .then(({ data }) => {
        dispatch({
          type: GENRE_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: GENRE_ERROR,
          error: error
        });
      });
  };
};
