import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { UIReducer } from "redux/UIReducer";
import { countriesReducer } from "./countriesReducer";

const rootReducer = combineReducers({
  ui: UIReducer,
  countriesState: countriesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
