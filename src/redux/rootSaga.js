import { all } from "redux-saga/effects";

import { watchFetchCountriesSaga } from "bus/countries/fetchCountriesSaga";
import { watchUpdateCountriesSaga } from "bus/countries/updateCountriesSaga";
import { watchFetchStatesSaga } from "bus/states/fetchStatesSaga";
import { watchUpdateStatesSaga } from "bus/states/updateStatesSaga";
import { watchFetchCitesSaga } from "bus/cities/fetchCitiesSaga";

export const rootSaga = function* () {
  yield all([
    watchUpdateCountriesSaga(),
    watchFetchCountriesSaga(),
    watchUpdateStatesSaga(),
    watchFetchStatesSaga(),
    watchFetchCitesSaga(),
  ]);
};
