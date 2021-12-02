import { SHOW_FILTER, SHOW_MODAL, SHOW_MENU_COLUMN } from "bus/ui/types";

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
