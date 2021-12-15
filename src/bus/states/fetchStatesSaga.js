import { takeEvery, put, call, select } from "redux-saga/effects";

import { initialUrl } from "constants/initialUrl";

import {
  fetchStatesSucces,
  fetchStatesStart,
  fetchStatesError,
} from "bus/states/actions";
import { fetchData } from "bus/common/fetchData";
import { urlGenerator } from "bus/common/urlGenerator";
import {
  FETCH_STATES_FOR_SAGA,
  FETCH_STATES_FOR_NEXT_TIMES,
} from "bus/states/types";
import { showModal } from "bus/ui/actions";

export const workerFetchStatesSaga = function* () {
  try {
    yield put(fetchStatesStart());
    const functionality = yield select((state) => state.ui.functionality);
    const url = urlGenerator(functionality, initialUrl, "states");
    const states = yield call(fetchData, url);
    yield put(fetchStatesSucces(states));
  } catch (e) {
    yield put(fetchStatesError(e));
    yield put(showModal(true));
  }
};

export const watchFetchStatesSaga = function* () {
  yield takeEvery(FETCH_STATES_FOR_SAGA, workerFetchStatesSaga);
  yield takeEvery(FETCH_STATES_FOR_NEXT_TIMES, workerFetchStatesSaga);
};
