import { takeEvery, put, call, select } from "redux-saga/effects";

import {
  putCountryError,
  putCountrySuccess,
  putCountryStart,
} from "bus/country/actions";
import { putData } from "bus/country/putData";
import { PUT_FOR_SAGA } from "bus/country/types";
import { initialUrl } from "constants/initialUrl";

export const workerPutCountriesSaga = function* () {
  try {
    yield put(putCountryStart());
    const editCountry = yield select(
      (state) => state.countriesState.editCountry
    );
    const url = `${initialUrl}/${editCountry.id}`;
    yield call(putData, url, editCountry);
    yield put(putCountrySuccess());
  } catch (e) {
    yield put(putCountryError(e));
  }
};

export const watchPutCountriesSaga = function* () {
  yield takeEvery(PUT_FOR_SAGA, workerPutCountriesSaga);
};
