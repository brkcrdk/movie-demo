import {
  ACTOR_ERROR,
  ACTOR_FETCH,
  ACTOR_SUCCESS,
  ActorState,
  ActorActions
} from "./types";

const initialState: ActorState = {
  actor: [],
  isLoading: false,
  error: null
};

const actorReducer = (state = initialState, action: ActorActions) => {
  switch (action.type) {
    case ACTOR_FETCH:
      return { ...state, isLoading: true };
    case ACTOR_SUCCESS:
      return { ...state, isLoading: false, actor: action.payload };
    case ACTOR_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default actorReducer;
