import { SHOW_FILTER, SHOW_MODAL, SHOW_MENU_COLUMN } from "redux/types";

const initialState = {
  isFilter: false,
  isModal: false,
  isMenuColumn: null,
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FILTER:
      return {
        ...state,
        isFilter: action.payload,
      };
    case SHOW_MODAL:
      return {
        ...state,
        isModal: action.payload,
      };
    case SHOW_MENU_COLUMN:
      return {
        ...state,
        isMenuColumn: action.payload,
      };
    default:
      return state;
  }
};
