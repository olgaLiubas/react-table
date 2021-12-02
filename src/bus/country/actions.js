import {
  FETCH_FOR_SAGA,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_ERROR,
  SET_ORDER,
  SET_FILTER_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
} from "bus/country/types";

export const fetchForSaga = () => ({
  type: FETCH_FOR_SAGA,
});

export const fetchCountriesStart = () => ({
  type: FETCH_COUNTRIES_START,
});

export const fetchCountries = (newCountries) => ({
  type: FETCH_COUNTRIES,
  payload: newCountries,
});

export const fetchCountriesError = (error) => ({
  type: FETCH_COUNTRIES_ERROR,
  payload: error,
});

export const setOrder = (newFilter) => ({
  type: SET_ORDER,
  payload: newFilter,
});

export const setFilterColumn = (newFilter) => ({
  type: SET_FILTER_COLUMN,
  payload: newFilter,
});

export const setFilterOperator = (newFilter) => ({
  type: SET_FILTER_OPERATOR,
  payload: newFilter,
});

export const setFilterValue = (newFilter) => ({
  type: SET_FILTER_VALUE,
  payload: newFilter,
});
