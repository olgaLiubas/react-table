import { takeEvery, put, call } from "redux-saga/effects";

import {
  updateStatesError,
  updateStatesSuccess,
  updateStatesStart,
} from "bus/states/actions";
import { initialUrl } from "constants/initialUrl";
import { updateData } from "bus/common/updateData";
import { UPDATE_STATES_FOR_SAGA } from "bus/states/types";

export const workerUpdateStatesSaga = function* (action) {
  try {
    yield put(updateStatesStart());
    const url = `states/${action.payload.id}`;
    yield call(updateData, url, action.payload);
    yield put(updateStatesSuccess());
  } catch (e) {
    yield put(updateStatesError(e));
  }
};

export const watchUpdateStatesSaga = function* () {
  yield takeEvery(UPDATE_STATES_FOR_SAGA, workerUpdateStatesSaga);
};
