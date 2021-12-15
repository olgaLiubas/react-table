import { all } from "redux-saga/effects";

import { watchFetchCountriesSaga } from "bus/country/fetchCountriesSaga";
import { watchUpdateCountriesSaga } from "bus/country/updateCountriesSaga";
import { watchFetchStatesSaga } from "bus/states/fetchStatesSaga";
import { watchUpdateStatesSaga } from "bus/states/updateStatesSaga";

export const rootSaga = function* () {
  yield all([
    watchUpdateCountriesSaga(),
    watchFetchCountriesSaga(),
    watchUpdateStatesSaga(),
    watchFetchStatesSaga(),
  ]);
};
