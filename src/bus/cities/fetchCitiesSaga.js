import { takeEvery, put, call, select } from "redux-saga/effects";

import {
  fetchCitiesSucces,
  fetchCitiesStart,
  fetchCitiesError,
} from "bus/cities/actions";
import {
  FETCH_CITIES_FOR_SAGA,
  FETCH_CITIES_FOR_NEXT_TIMES,
} from "bus/cities/types";
import { showModal } from "bus/ui/actions";
import { fetchData } from "bus/common/fetchData";
import { initialUrl } from "constants/initialUrl";
import { urlGenerator } from "bus/common/urlGenerator";

export const workerFetchCitesSaga = function* () {
  try {
    yield put(fetchCitiesStart());
    const functionality = yield select((state) => state.ui.functionality);
    const url = urlGenerator(functionality, initialUrl, "cities");
    const states = yield call(fetchData, url);
    yield put(fetchCitiesSucces(states));
  } catch (e) {
    yield put(fetchCitiesError(e));
    yield put(showModal(true));
  }
};

export const watchFetchCitesSaga = function* () {
  yield takeEvery(FETCH_CITIES_FOR_SAGA, workerFetchCitesSaga);
  yield takeEvery(FETCH_CITIES_FOR_NEXT_TIMES, workerFetchCitesSaga);
};
