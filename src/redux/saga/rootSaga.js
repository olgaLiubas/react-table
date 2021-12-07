import { all } from "redux-saga/effects";

import { watchGetCountriesSaga } from "bus/country/getCountriesSaga";
import { watchPutCountriesSaga } from "bus/country/putCountriesSaga";

export const rootSaga = function* () {
  yield all([watchPutCountriesSaga(), watchGetCountriesSaga()]);
};
