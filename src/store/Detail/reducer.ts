import {
  DetailState,
  DetailActions,
  DETAIL_ERROR,
  DETAIL_FETCH,
  DETAIL_SUCCESS
} from "./types";

const initialState: DetailState = {
  movie: [],
  isLoading: false,
  error: null
};

const detailReducer = (state = initialState, action: DetailActions) => {
  switch (action.type) {
    case DETAIL_FETCH:
      return { ...state, isLoading: true };
    case DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload
      };
    case DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default detailReducer;
