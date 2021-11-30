import { SET_COUNTRIES, SET_STATUS } from "redux/types";

export const setStatus = (newStatus) => ({
  type: SET_STATUS,
  payload: newStatus,
});

export const setCountries = (newCountries) => ({
  type: SET_COUNTRIES,
  payload: newCountries,
});
