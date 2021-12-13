import {
  SHOW_FILTER,
  SHOW_MODAL,
  SHOW_MENU_COLUMN,
  HIDE_FILTER,
  HIDE_MENU_COLUMN,
  HIDE_MODAL,
  HIDE_COLUMN,
} from "bus/ui/types";

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

export const hideColumn = (state) => ({ type: HIDE_COLUMN, payload: state });
