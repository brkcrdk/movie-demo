import { Keywords } from "../serverTypes";

export interface KeywordState {
  keyword: Keywords[];
  isLoading: boolean;
  error: null;
}

export const KEYWORD_FETCH = "KEYWORD_FETCH";
export const KEYWORD_SUCCESS = "KEYWORD_SUCCESS";
export const KEYWORD_ERROR = "KEYWORD_ERROR";

interface KeywordFetch {
  type: typeof KEYWORD_FETCH;
}

interface KeywordSuccess {
  type: typeof KEYWORD_SUCCESS;
  payload: Keywords[];
}

interface KeywordError {
  type: typeof KEYWORD_ERROR;
  error: null;
}

export type KeywordActions = KeywordError | KeywordSuccess | KeywordFetch;
