import { takeEvery, put, call } from "redux-saga/effects";

import {
  fetchCountries,
  fetchCountriesStart,
  fetchCountriesError,
} from "bus/country/actions";
import { getData } from "bus/country/getData";
import { initialUrl } from "constants/initialUrl";
import { FETCH_FOR_SAGA } from "bus/country/types";

export const workerCountriesSaga = function* () {
  try {
    yield put(fetchCountriesStart());
    const countries = yield call(getData, initialUrl);
    yield put(fetchCountries(countries));
  } catch (e) {
    yield put(fetchCountriesError(e));
  }
};

export const watchCountriesSaga = function* () {
  yield takeEvery(FETCH_FOR_SAGA, workerCountriesSaga);
};
