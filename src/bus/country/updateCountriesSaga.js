import { takeEvery, put, call } from "redux-saga/effects";

import {
  updateCountryError,
  updateCountrySuccess,
  updateCountryStart,
} from "bus/country/actions";
import { updateData } from "bus/common/updateData";
import { UPDATE_COUNTRIES_FOR_SAGA } from "bus/country/types";
import { initialUrl } from "constants/initialUrl";

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
