import { Detail } from "../serverTypes";
export interface DetailState {
  movie: Detail[];
  isLoading: boolean;
  error: null;
}

export const DETAIL_FETCH = "DETAIL_FETCH";
export const DETAIL_SUCCESS = "DETAIL_SUCCESS";
export const DETAIL_ERROR = "DETAIL_ERROR";

interface DetailFetch {
  type: typeof DETAIL_FETCH;
}
interface DetailSuccess {
  type: typeof DETAIL_SUCCESS;
  payload: Detail[];
}
interface DetailError {
  type: typeof DETAIL_ERROR;
  error: null;
}

export type DetailActions = DetailFetch | DetailSuccess | DetailError;
