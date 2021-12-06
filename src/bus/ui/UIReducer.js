import {
  SHOW_FILTER,
  SHOW_MODAL,
  SHOW_MENU_COLUMN,
  HIDE_COLUMN,
} from "bus/ui/types";

const initialState = {
  isFilter: false,
  isModal: false,
  isMenuColumn: null,
  idColumn: true,
  nameColumn: true,
  capitalColumn: true,
  phoneCodeColumn: true,
  isoColumn: true,
  currencyColumn: true,
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_COLUMN:
      return {
        ...state,
        ...action.payload,
      };
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
