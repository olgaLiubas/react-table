import { takeEvery, put, call } from "redux-saga/effects";

import {
  updateCitiesError,
  updateCitiesSuccess,
  updateCitiesStart,
} from "bus/cities/actions";
import { updateData } from "bus/common/updateData";
import { UPDATE_CITIES_FOR_SAGA } from "bus/cities/types";

export const workerUpdateCitiesSaga = function* (action) {
  try {
    yield put(updateCitiesStart());
    const url = `cities/${action.payload.id}`;
    yield call(updateData, url, action.payload);
    yield put(updateCitiesSuccess());
  } catch (e) {
    yield put(updateCitiesError(e));
  }
};

export const watchUpdateCitiesSaga = function* () {
  yield takeEvery(UPDATE_CITIES_FOR_SAGA, workerUpdateCitiesSaga);
};
