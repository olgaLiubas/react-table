import { takeEvery, put, call, select } from "redux-saga/effects";

import {
  fetchCountries,
  fetchCountriesStart,
  fetchCountriesError,
} from "bus/country/actions";
import { getData } from "bus/country/getData";
import { urlGenerator } from "bus/country/urlGenerator";
import { FETCH_FOR_SAGA, FETCH_FOR_NEXT_TIMES } from "bus/country/types";
import { showModal } from "bus/ui/actions";

export const workerGetCountriesSaga = function* () {
  try {
    yield put(fetchCountriesStart());
    const functionality = yield select(
      (state) => state.countriesState.functionality
    );
    const url = urlGenerator(functionality);
    const countries = yield call(getData, url);
    yield put(fetchCountries(countries));
  } catch (e) {
    yield put(fetchCountriesError(e));
    yield put(showModal(true));
  }
};

export const watchGetCountriesSaga = function* () {
  yield takeEvery(FETCH_FOR_SAGA, workerGetCountriesSaga);
  yield takeEvery(FETCH_FOR_NEXT_TIMES, workerGetCountriesSaga);
};
