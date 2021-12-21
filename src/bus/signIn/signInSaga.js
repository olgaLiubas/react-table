import { takeEvery, put } from "redux-saga/effects";

import {
  setUserTokenStart,
  setUserTokenSuccess,
  setUserTokenError,
} from "bus/signIn/actions";
import { TOKEN } from "constants/token";
import { userData } from "constants/userData";
import { SET_USER_TOKEN_FOR_SAGA } from "bus/signIn/types";
import { isUserDataTrue } from "bus/signIn/isUserDataTrue";

export const workerSignInSaga = function* (action) {
  try {
    yield put(setUserTokenStart());
    const isLogin = isUserDataTrue(action.payload, userData);
    if (isLogin) {
      yield put(setUserTokenSuccess(TOKEN));
      localStorage.setItem("token", TOKEN);
    }
  } catch {
    yield put(setUserTokenError("Data was entered uncorrect!"));
  }
};

export const watchSignInSaga = function* () {
  yield takeEvery(SET_USER_TOKEN_FOR_SAGA, workerSignInSaga);
};
