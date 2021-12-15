import { takeEvery, put, call, select } from "redux-saga/effects";

import {
  fetchStatesSuccess,
  fetchStatesStart,
  fetchStatesError,
} from "bus/states/actions";
import { getData } from "bus/states/getData";
import { urlGenerator } from "bus/states/urlGenerator";
import {
  FETCH_FOR_SAGA_STATES,
  FETCH_FOR_NEXT_TIMES_STATES,
} from "bus/states/types";
import { showModal } from "bus/ui/actions";

export const workerFetchStatesSaga = function* () {
  try {
    yield put(fetchStatesStart());
    const functionality = yield select(
      (state) => state.statesState.functionality
    );
    const url = urlGenerator(functionality);
    const states = yield call(getData, url);
    yield put(fetchStatesSuccess(states));
  } catch (e) {
    yield put(fetchStatesError(e));
    yield put(showModal(true));
  }
};

export const watchFetchStatesSaga = function* () {
  yield takeEvery(FETCH_FOR_SAGA_STATES, workerFetchStatesSaga);
  yield takeEvery(FETCH_FOR_NEXT_TIMES_STATES, workerFetchStatesSaga);
};
