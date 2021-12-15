import {
  FETCH_FOR_SAGA_STATES,
  FETCH_FOR_NEXT_TIMES_STATES,
  FETCH_STATES_SUCCESS,
  FETCH_STATES_START,
  FETCH_STATES_ERROR,
  SET_EDIT_STATE,
  UPDATE_FOR_SAGA_STATES,
  UPDATE_STATES_START,
  UPDATE_STATES_ERROR,
  UPDATE_STATES_SUCCESS,
  SET_ORDER,
  SET_FILTER_COLUMN,
  SET_SORTING_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
  SET_ROWS_AMOUNT,
  SET_PAGE_NUMBER,
  SORT_OR_FILTER,
  PREPARE_NEW_UPDATING_REQ,
  PREPARE_NEW_FETCHING_REQ,
} from "bus/states/types";

export const fetchForSagaStates = (initialUrl) => ({
  type: FETCH_FOR_SAGA_STATES,
  payload: initialUrl,
});

export const updateForSagaStates = (editCountry) => ({
  type: UPDATE_FOR_SAGA_STATES,
  payload: editCountry,
});

export const fetchForNextTimesStates = (newUrl) => ({
  type: FETCH_FOR_NEXT_TIMES_STATES,
  payload: newUrl,
});

export const fetchStatesStart = () => ({
  type: FETCH_STATES_START,
});

export const fetchStatesSuccess = (newCountries) => ({
  type: FETCH_STATES_SUCCESS,
  payload: newCountries,
});

export const fetchStatesError = (error) => ({
  type: FETCH_STATES_ERROR,
  payload: error,
});

export const prepareNewFetchingReguest = () => ({
  type: PREPARE_NEW_FETCHING_REQ,
});

export const prepareNewUpdatingReguest = () => ({
  type: PREPARE_NEW_UPDATING_REQ,
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

export const setEditState = (newCountry) => ({
  type: SET_EDIT_STATE,
  payload: newCountry,
});
