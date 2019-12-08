import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { favouriteStorage } from "./favouriteStorage";
const configureStore = () => {
  const middleware = [thunkMiddleware, favouriteStorage];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  );
  return store;
};

export default configureStore;
