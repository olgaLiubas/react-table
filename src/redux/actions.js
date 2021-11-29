import { SET_COUNTRIES, SET_DROPDOWNS_STATUSES } from "redux/types";

export const setDropdownsStatuses = (newDropdownsStatuses) => ({
  type: SET_DROPDOWNS_STATUSES,
  payload: newDropdownsStatuses,
});

export const setCountries = (newCountries) => ({
  type: SET_COUNTRIES,
  payload: newCountries,
});
