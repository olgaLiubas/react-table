import {
  SHOW_FILTER,
  SHOW_MODAL,
  SHOW_MENU_COLUMN,
  HIDE_FILTER,
  HIDE_MENU_COLUMN,
  HIDE_MODAL,
  CHANGE_ORDER,
  SET_FILTER_COLUMN,
  SET_SORTING_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
  SET_ROWS_AMOUNT,
  SET_PAGE_NUMBER,
  SORT_OR_FILTER,
  SET_EDIT_PLACE,
  SET_NEW_ROUTER_PAGE,
  SET_ASC_ORDER,
  SET_DESC_ORDER,
} from "bus/ui/types";

export const setNewRouterPage = (newPage) => ({
  type: SET_NEW_ROUTER_PAGE,
  payload: newPage,
});

export const showFilter = () => ({
  type: SHOW_FILTER,
});

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const showMenuColumn = (column) => ({
  type: SHOW_MENU_COLUMN,
  payload: column,
});

export const hideFilter = () => ({
  type: HIDE_FILTER,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const hideMenuColumn = () => ({
  type: HIDE_MENU_COLUMN,
});

export const setSortOrFilter = (newAction) => ({
  type: SORT_OR_FILTER,
  payload: newAction,
});

export const changeOrder = () => ({
  type: CHANGE_ORDER,
});

export const setAscOrder = () => ({
  type: SET_ASC_ORDER,
});

export const setDescOrder = () => ({
  type: SET_DESC_ORDER,
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

export const setEditPlace = (newPlace) => ({
  type: SET_EDIT_PLACE,
  payload: newPlace,
});
