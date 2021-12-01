import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { rootSaga } from "./saga/rootSaga";
import { UIReducer } from "redux/UIReducer";
import { countriesReducer } from "./countriesReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  ui: UIReducer,
  countriesState: countriesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
