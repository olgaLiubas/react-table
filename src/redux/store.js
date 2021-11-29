import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { dropdownsReducer } from "redux/dropdownsReducer";
import { countriesReducer } from "./countriesReducer";

const rootReducer = combineReducers({
  dropdownsState: dropdownsReducer,
  countriesState: countriesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
