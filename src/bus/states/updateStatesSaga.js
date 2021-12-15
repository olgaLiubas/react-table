import { takeEvery, put, call } from "redux-saga/effects";

import {
  updateStatesStart,
  updateStatesSuccess,
  updateStatesError,
} from "bus/states/actions";
import { putData } from "bus/states/putData";
import { UPDATE_FOR_SAGA_STATES } from "bus/states/types";
import { statesInitialUrl } from "constants/initialUrls";

export const workerUpdateStatesSaga = function* (action) {
  try {
    yield put(updateStatesStart());
    const url = `${statesInitialUrl}/${action.payload.id}`;
    yield call(putData, url, action.payload);
    yield put(updateStatesSuccess());
  } catch (e) {
    yield put(updateStatesError(e));
  }
};

export const watchUpdateStatesSaga = function* () {
  yield takeEvery(UPDATE_FOR_SAGA_STATES, workerUpdateStatesSaga);
};
