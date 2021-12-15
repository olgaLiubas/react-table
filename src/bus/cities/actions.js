import {
  FETCH_CITIES_FOR_SAGA,
  FETCH_CITIES_FOR_NEXT_TIMES,
  UPDATE_CITIES_FOR_SAGA,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_START,
  FETCH_CITIES_ERROR,
  UPDATE_CITIES_SUCCESS,
  UPDATE_CITIES_ERROR,
  UPDATE_CITIES_START,
  PREPARE_NEW_UPDATING_REQ_CITIES,
  PREPARE_NEW_FETCHING_REQ_CITIES,
  HIDE_CITIES_COLUMN,
} from "bus/cities/types";

export const fetchForSaga = (initialUrl) => ({
  type: FETCH_CITIES_FOR_SAGA,
  payload: initialUrl,
});

export const updateForSaga = (editCountry) => ({
  type: UPDATE_CITIES_FOR_SAGA,
  payload: editCountry,
});

export const fetchForNextTimes = (newUrl) => ({
  type: FETCH_CITIES_FOR_NEXT_TIMES,
  payload: newUrl,
});

export const fetchCitiesStart = () => ({
  type: FETCH_CITIES_START,
});

export const fetchCitiesSucces = (newCountries) => ({
  type: FETCH_CITIES_SUCCESS,
  payload: newCountries,
});

export const fetchCitiesError = (error) => ({
  type: FETCH_CITIES_ERROR,
  payload: error,
});

export const prepareNewFetchingReguest = () => ({
  type: PREPARE_NEW_FETCHING_REQ_CITIES,
});

export const prepareNewUpdatingReguest = () => ({
  type: PREPARE_NEW_UPDATING_REQ_CITIES,
});

export const updateCitiesStart = () => ({
  type: UPDATE_CITIES_START,
});

export const updateCitiesSuccess = () => ({
  type: UPDATE_CITIES_SUCCESS,
});

export const updateCitiesError = (error) => ({
  type: UPDATE_CITIES_ERROR,
  payload: error,
});

export const hideColumn = (state) => ({
  type: HIDE_CITIES_COLUMN,
  payload: state,
});
