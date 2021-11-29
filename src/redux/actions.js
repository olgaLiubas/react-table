import { SET_DROPDOWNS_STATUSES } from "redux/types";

export const setDropdownsStatuses = (newDropdownsStatuses) => ({
  type: SET_DROPDOWNS_STATUSES,
  payload: newDropdownsStatuses,
});
