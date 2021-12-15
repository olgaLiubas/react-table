import { takeEvery, put, call, select } from "redux-saga/effects";

import { initialUrl } from "constants/initialUrl";

import {
  fetchCountriesSucces,
  fetchCountriesStart,
  fetchCountriesError,
} from "bus/country/actions";
import { fetchData } from "bus/common/fetchData";
import { urlGenerator } from "bus/common/urlGenerator";
import {
  FETCH_COUNTRIES_FOR_SAGA,
  FETCH_COUNTRIES_FOR_NEXT_TIMES,
} from "bus/country/types";
import { showModal } from "bus/ui/actions";

export const workerFetchCountriesSaga = function* () {
  try {
    yield put(fetchCountriesStart());
    const functionality = yield select((state) => state.ui.functionality);
    const url = urlGenerator(functionality, initialUrl, "countries");
    const countries = yield call(fetchData, url);
    yield put(fetchCountriesSucces(countries));
  } catch (e) {
    yield put(fetchCountriesError(e));
    yield put(showModal(true));
  }
};

export const watchFetchCountriesSaga = function* () {
  yield takeEvery(FETCH_COUNTRIES_FOR_SAGA, workerFetchCountriesSaga);
  yield takeEvery(FETCH_COUNTRIES_FOR_NEXT_TIMES, workerFetchCountriesSaga);
};
