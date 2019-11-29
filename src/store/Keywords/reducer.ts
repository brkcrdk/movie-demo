import {
  KeywordActions,
  KEYWORD_ERROR,
  KEYWORD_FETCH,
  KEYWORD_SUCCESS,
  KeywordState
} from "./types";

const initialState: KeywordState = {
  keyword: [],
  isLoading: false,
  error: null
};

const keywordReducer = (state = initialState, action: KeywordActions) => {
  switch (action.type) {
    case KEYWORD_FETCH:
      return { ...state, isLoading: true };
    case KEYWORD_SUCCESS:
      return { ...state, isLoading: false, genre: action.payload };
    case KEYWORD_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default keywordReducer;
