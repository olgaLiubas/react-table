import {
  SHOW_FILTER,
  SHOW_MODAL,
  SHOW_MENU_COLUMN,
  HIDE_COLUMN,
  HIDE_FILTER,
  HIDE_MENU_COLUMN,
  HIDE_MODAL,
} from "bus/ui/types";

const initialState = {
  isFilter: false,
  isModal: false,
  isMenuColumn: null,

  columns: {
    idColumn: true,
    nameColumn: true,
    capitalColumn: true,
    phoneCodeColumn: true,
    isoColumn: true,
    currencyColumn: true,
  },
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_COLUMN:
      return {
        ...state,
        columns: {
          ...state.columns,
          ...action.payload,
        },
      };
    case SHOW_FILTER:
      return {
        ...state,
        isFilter: true,
      };
    case SHOW_MODAL:
      return {
        ...state,
        isModal: true,
      };
    case SHOW_MENU_COLUMN:
      return {
        ...state,
        isMenuColumn: action.payload,
      };
    case HIDE_FILTER:
      return {
        ...state,
        isFilter: false,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isModal: false,
      };
    case HIDE_MENU_COLUMN:
      return {
        ...state,
        isMenuColumn: false,
      };
    default:
      return state;
  }
};
