import {
  FETCH_FOR_SAGA,
  FETCH_FOR_NEXT_TIMES,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_ERROR,
  SET_ORDER,
  SET_FILTER_COLUMN,
  SET_SORTING_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
  SET_ROWS_AMOUNT,
  SET_PAGE_NUMBER,
  SORT_OR_FILTER,
  SET_EDIT_COUNTRY,
  PUT_FOR_SAGA,
  PUT_COUNTRY_SUCCESS,
  PUT_COUNTRY_ERROR,
  PUT_COUNTRY_START,
  PREPARE_NEW_UPDATING_REQ,
  PREPARE_NEW_FETCHING_REQ,
} from "bus/country/types";

export const fetchForSaga = (initialUrl) => ({
  type: FETCH_FOR_SAGA,
  payload: initialUrl,
});

export const putForSaga = (editCountry) => ({
  type: PUT_FOR_SAGA,
  payload: editCountry,
});

export const fetchForNextTimes = (newUrl) => ({
  type: FETCH_FOR_NEXT_TIMES,
  payload: newUrl,
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

export const prepareNewFetchingReguest = () => ({
  type: PREPARE_NEW_FETCHING_REQ,
});

export const prepareNewUpdatingReguest = () => ({
  type: PREPARE_NEW_UPDATING_REQ,
});

export const putCountryStart = () => ({
  type: PUT_COUNTRY_START,
});

export const putCountrySuccess = () => ({
  type: PUT_COUNTRY_SUCCESS,
});

export const putCountryError = (error) => ({
  type: PUT_COUNTRY_ERROR,
  payload: error,
});

export const setSortOrFilter = (newAction) => ({
  type: SORT_OR_FILTER,
  payload: newAction,
});

export const setOrder = () => ({
  type: SET_ORDER,
});

export const setSortingColumn = (newFilter) => ({
  type: SET_SORTING_COLUMN,
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

export const setRowsAmount = (newAmount) => ({
  type: SET_ROWS_AMOUNT,
  payload: newAmount,
});

export const setPageNumber = (newNumber) => ({
  type: SET_PAGE_NUMBER,
  payload: newNumber,
});

export const setEditCountry = (newCountry) => ({
  type: SET_EDIT_COUNTRY,
  payload: newCountry,
});
