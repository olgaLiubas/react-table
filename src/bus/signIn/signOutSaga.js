import { takeEvery, put } from "redux-saga/effects";

import {
  deleteUserTokenStart,
  deleteUserTokenSuccess,
  deleteUserTokenError,
} from "bus/signIn/actions";
import { DELETE_USER_TOKEN_FOR_SAGA } from "bus/signIn/types";

export const workerSignOutSaga = function* () {
  try {
    yield put(deleteUserTokenStart());
    localStorage.removeItem("token");
    yield put(deleteUserTokenSuccess());
  } catch {
    yield put(deleteUserTokenError("Process of logouting go wrong!"));
  }
};

export const watchSignOutSaga = function* () {
  yield takeEvery(DELETE_USER_TOKEN_FOR_SAGA, workerSignOutSaga);
};
