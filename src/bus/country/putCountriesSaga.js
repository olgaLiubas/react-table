import { takeEvery, put, call } from "redux-saga/effects";

import {
  putCountryError,
  putCountrySuccess,
  putCountryStart,
} from "bus/country/actions";
import { putData } from "bus/country/putData";
import { PUT_FOR_SAGA } from "bus/country/types";
import { initialUrl } from "constants/initialUrl";

export const workerPutCountriesSaga = function* (action) {
  console.log(action.payload);
  try {
    yield put(putCountryStart());
    const url = `${initialUrl}/${action.payload.id}`;
    yield call(putData, url, action.payload);
    yield put(putCountrySuccess());
  } catch (e) {
    yield put(putCountryError(e));
  }
};

export const watchPutCountriesSaga = function* () {
  yield takeEvery(PUT_FOR_SAGA, workerPutCountriesSaga);
};
