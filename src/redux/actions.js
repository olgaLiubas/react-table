import {
  SET_COUNTRIES,
  SHOW_FILTER,
  SHOW_MODAL,
  SHOW_MENU_COLUMN,
  SET_ORDER,
  SET_FILTER_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
} from "redux/types";

export const showFilter = (newStatus) => ({
  type: SHOW_FILTER,
  payload: newStatus,
});

export const showModal = (newStatus) => ({
  type: SHOW_MODAL,
  payload: newStatus,
});

export const showMenuColumn = (newStatus) => ({
  type: SHOW_MENU_COLUMN,
  payload: newStatus,
});

export const setCountries = (newCountries) => ({
  type: SET_COUNTRIES,
  payload: newCountries,
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
