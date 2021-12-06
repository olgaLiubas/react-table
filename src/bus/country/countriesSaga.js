<<<<<<< HEAD
import { takeEvery, put, call, select } from "redux-saga/effects";
=======
import { takeEvery, put, call } from "redux-saga/effects";
>>>>>>> main

import {
  fetchCountries,
  fetchCountriesStart,
  fetchCountriesError,
} from "bus/country/actions";
import { getData } from "bus/country/getData";
<<<<<<< HEAD
import { urlGenerator } from "bus/country/urlGenerator";
import { FETCH_FOR_SAGA, FETCH_FOR_NEXT_TIMES } from "bus/country/types";
=======
import { initialUrl } from "constants/initialUrl";
import { FETCH_FOR_SAGA } from "bus/country/types";
>>>>>>> main

export const workerCountriesSaga = function* () {
  try {
    yield put(fetchCountriesStart());
<<<<<<< HEAD
    const functionality = yield select(
      (state) => state.countriesState.functionality
    );
    const url = urlGenerator(functionality);
    const countries = yield call(getData, url);
=======
    const countries = yield call(getData, initialUrl);
>>>>>>> main
    yield put(fetchCountries(countries));
  } catch (e) {
    yield put(fetchCountriesError(e));
  }
};

export const watchCountriesSaga = function* () {
  yield takeEvery(FETCH_FOR_SAGA, workerCountriesSaga);
<<<<<<< HEAD
  yield takeEvery(FETCH_FOR_NEXT_TIMES, workerCountriesSaga);
=======
>>>>>>> main
};
