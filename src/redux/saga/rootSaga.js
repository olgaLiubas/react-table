import { watchCountriesSaga } from "redux/saga/countriesSaga";

export const rootSaga = function* () {
  yield watchCountriesSaga();
};
