import { counterReducer } from "./counterReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  counterState: counterReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
