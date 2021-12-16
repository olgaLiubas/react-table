import {
  FETCH_COUNTRIES_FOR_SAGA,
  FETCH_COUNTRIES_FOR_NEXT_TIMES,
  UPDATE_COUNTRIES_FOR_SAGA,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_ERROR,
  UPDATE_COUNTRY_SUCCESS,
  UPDATE_COUNTRY_ERROR,
  UPDATE_COUNTRY_START,
  PREPARE_NEW_UPDATING_REQ_COUNTRIES,
  PREPARE_NEW_FETCHING_REQ_COUNTRIES,
  HIDE_COLUMN,
} from "bus/countries/types";

export const fetchForSaga = (initialUrl) => ({
  type: FETCH_COUNTRIES_FOR_SAGA,
  payload: initialUrl,
});

export const updateForSaga = (editCountry) => ({
  type: UPDATE_COUNTRIES_FOR_SAGA,
  payload: editCountry,
});

export const fetchForNextTimes = (newUrl) => ({
  type: FETCH_COUNTRIES_FOR_NEXT_TIMES,
  payload: newUrl,
});

export const fetchCountriesStart = () => ({
  type: FETCH_COUNTRIES_START,
});

export const fetchCountriesSucces = (newCountries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: newCountries,
});

export const fetchCountriesError = (error) => ({
  type: FETCH_COUNTRIES_ERROR,
  payload: error,
});

export const prepareNewFetchingReguest = () => ({
  type: PREPARE_NEW_FETCHING_REQ_COUNTRIES,
});

export const prepareNewUpdatingReguest = () => ({
  type: PREPARE_NEW_UPDATING_REQ_COUNTRIES,
});

export const updateCountryStart = () => ({
  type: UPDATE_COUNTRY_START,
});

export const updateCountrySuccess = () => ({
  type: UPDATE_COUNTRY_SUCCESS,
});

export const updateCountryError = (error) => ({
  type: UPDATE_COUNTRY_ERROR,
  payload: error,
});

export const hideColumn = (state) => ({ type: HIDE_COLUMN, payload: state });
