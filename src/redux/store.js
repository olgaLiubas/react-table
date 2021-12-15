import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { rootSaga } from "./saga/rootSaga";
import { UIReducer } from "bus/ui/UIReducer";
import { countriesReducer } from "../bus/country/countriesReducer";
import { statesReducer } from "bus/states/statesReducer";
import { citiesReducer } from "bus/cities/citiesReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  ui: UIReducer,
  countriesState: countriesReducer,
  statesState: statesReducer,
  citiesState: citiesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
