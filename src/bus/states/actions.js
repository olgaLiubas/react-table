import {
  FETCH_STATES_FOR_SAGA,
  FETCH_STATES_FOR_NEXT_TIMES,
  UPDATE_STATES_FOR_SAGA,
  FETCH_STATES_SUCCESS,
  FETCH_STATES_START,
  FETCH_STATES_ERROR,
  UPDATE_STATES_SUCCESS,
  UPDATE_STATES_ERROR,
  UPDATE_STATES_START,
  PREPARE_NEW_UPDATING_REQ_STATES,
  PREPARE_NEW_FETCHING_REQ_STATES,
  HIDE_STATES_COLUMN,
} from "bus/states/types";

export const fetchForSaga = (initialUrl) => ({
  type: FETCH_STATES_FOR_SAGA,
  payload: initialUrl,
});

export const updateForSaga = (editCountry) => ({
  type: UPDATE_STATES_FOR_SAGA,
  payload: editCountry,
});

export const fetchForNextTimes = (newUrl) => ({
  type: FETCH_STATES_FOR_NEXT_TIMES,
  payload: newUrl,
});

export const fetchStatesStart = () => ({
  type: FETCH_STATES_START,
});

export const fetchStatesSucces = (newCountries) => ({
  type: FETCH_STATES_SUCCESS,
  payload: newCountries,
});

export const fetchStatesError = (error) => ({
  type: FETCH_STATES_ERROR,
  payload: error,
});

export const prepareNewFetchingReguest = () => ({
  type: PREPARE_NEW_FETCHING_REQ_STATES,
});

export const prepareNewUpdatingReguest = () => ({
  type: PREPARE_NEW_UPDATING_REQ_STATES,
});

export const updateStatesStart = () => ({
  type: UPDATE_STATES_START,
});

export const updateStatesSuccess = () => ({
  type: UPDATE_STATES_SUCCESS,
});

export const updateStatesError = (error) => ({
  type: UPDATE_STATES_ERROR,
  payload: error,
});

export const hideColumn = (state) => ({
  type: HIDE_STATES_COLUMN,
  payload: state,
});
