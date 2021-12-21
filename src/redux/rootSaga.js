import { all } from "redux-saga/effects";

import { watchSignInSaga } from "bus/signIn/signInSaga";
import { watchFetchCitesSaga } from "bus/cities/fetchCitiesSaga";
import { watchFetchStatesSaga } from "bus/states/fetchStatesSaga";
import { watchUpdateStatesSaga } from "bus/states/updateStatesSaga";
import { watchUpdateCitiesSaga } from "bus/cities/updateCitiesSaga";
import { watchFetchCountriesSaga } from "bus/countries/fetchCountriesSaga";
import { watchUpdateCountriesSaga } from "bus/countries/updateCountriesSaga";

export const rootSaga = function* () {
  yield all([
    watchSignInSaga(),
    watchUpdateCountriesSaga(),
    watchFetchCountriesSaga(),
    watchUpdateStatesSaga(),
    watchFetchStatesSaga(),
    watchUpdateCitiesSaga(),
    watchFetchCitesSaga(),
  ]);
};
