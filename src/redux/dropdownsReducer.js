import { SET_DROPDOWNS_STATUSES } from "redux/types";

const initialState = {
  dropdownsStatuses: {
    isFilter: false,
    isModal: false,
    isMenuColumn: null,
  },
};

export const dropdownsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DROPDOWNS_STATUSES:
      return {
        ...state,
        dropdownsStatuses: { ...state.dropdownsStatuses, ...action.payload },
      };
    default:
      return state;
  }
};
