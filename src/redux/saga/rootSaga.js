import { watchCountriesSaga } from "bus/country/countriesSaga";

export const rootSaga = function* () {
  yield watchCountriesSaga();
};
