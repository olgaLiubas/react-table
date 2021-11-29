import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { dropdownsReducer } from "redux/dropdownsReducer";

const rootReducer = combineReducers({
  dropdownsState: dropdownsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
