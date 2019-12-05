import { ActorBio } from "../serverTypes";

export interface ActorState {
  actor: ActorBio[];
  isLoading: boolean;
  error: null;
}

export const ACTOR_FETCH = "ACTOR_FETCH";
export const ACTOR_SUCCESS = "ACTOR_SUCCESS";
export const ACTOR_ERROR = "ACTOR_ERROR";

interface ActorFetch {
  type: typeof ACTOR_FETCH;
}
interface ActorSuccess {
  type: typeof ACTOR_SUCCESS;
  payload: ActorBio[];
}
interface ActorError {
  type: typeof ACTOR_ERROR;
  error: null;
}
