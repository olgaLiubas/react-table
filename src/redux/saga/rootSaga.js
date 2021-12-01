import { takeEvery, put, call } from "redux-saga/effects";

import { getData } from "bus/getData";
import { setCountries } from "redux/actions";
import { initialUrl } from "constants/initialUrl";

export const workerSaga = function* () {
  const countries = yield call(getData, initialUrl);
  yield put(setCountries(countries));
};

export const watchSaga = function* () {
  yield takeEvery("FETCH", workerSaga);
};

export const rootSaga = function* () {
  yield watchSaga();
};
