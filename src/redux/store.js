import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { rootSaga } from "./rootSaga";
import { UIReducer } from "bus/ui/UIReducer";
import { statesReducer } from "bus/states/statesReducer";
import { citiesReducer } from "bus/cities/citiesReducer";
import { signInReducer } from "bus/signIn/signInReducer";
import { countriesReducer } from "bus/countries/countriesReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  ui: UIReducer,
  countriesState: countriesReducer,
  statesState: statesReducer,
  citiesState: citiesReducer,
  signIn: signInReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
