import { combineReducers } from "redux";
import { postMessage } from "./postMessageReducer";

export const reducers = combineReducers({
  postMessage,
});
