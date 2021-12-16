import { takeEvery, put, call } from "redux-saga/effects";

import {
  updateCountryError,
  updateCountrySuccess,
  updateCountryStart,
} from "bus/countries/actions";
import { initialUrl } from "constants/initialUrl";
import { updateData } from "bus/common/updateData";
import { UPDATE_COUNTRIES_FOR_SAGA } from "bus/countries/types";

export const workerUpdateCountriesSaga = function* (action) {
  try {
    yield put(updateCountryStart());
    const url = `${initialUrl}/countries/${action.payload.id}`;
    yield call(updateData, url, action.payload);
    yield put(updateCountrySuccess());
  } catch (e) {
    yield put(updateCountryError(e));
  }
};

export const watchUpdateCountriesSaga = function* () {
  yield takeEvery(UPDATE_COUNTRIES_FOR_SAGA, workerUpdateCountriesSaga);
};
