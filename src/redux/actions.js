import { SET_COUNTRIES, SET_STATUS, SET_FILTER } from "redux/types";

export const setStatus = (newStatus) => ({
  type: SET_STATUS,
  payload: newStatus,
});

export const setCountries = (newCountries) => ({
  type: SET_COUNTRIES,
  payload: newCountries,
});

export const setFilter = (newFilter) => ({
  type: SET_FILTER,
  payload: newFilter,
});
