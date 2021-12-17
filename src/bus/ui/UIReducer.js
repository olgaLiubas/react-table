import {
  SHOW_FILTER,
  SHOW_MODAL,
  SHOW_MENU_COLUMN,
  HIDE_FILTER,
  HIDE_MENU_COLUMN,
  HIDE_MODAL,
  SET_ORDER,
  SET_FILTER_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
  SET_ROWS_AMOUNT,
  SET_PAGE_NUMBER,
  SET_SORTING_COLUMN,
  SORT_OR_FILTER,
  SET_EDIT_PLACE,
  SET_NEW_ROUTER_PAGE,
} from "bus/ui/types";
import { ASC } from "constants/sortingOrders";
import { changeOrderHelper } from "bus/common/changeOrderHelper";

const initialState = {
  routerPage: "login",

  isFilter: false,
  isModal: false,
  isMenuColumn: null,

  functionality: {
    sortOrFilter: "sort",
    sortingColumn: "id",
    sortingOrder: ASC,
    filterColumn: "name",
    filterOperator: "contains",
    filterValue: "",
    rowsAmount: 20,
    pageNumber: 1,
  },

  editPlace: null,
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_ROUTER_PAGE:
      return {
        ...state,
        routerPage: action.payload,
        isFilter: initialState.isFilter,
        isModal: initialState.isModal,
        isMenuColumn: initialState.isMenuColumn,
        functionality: initialState.functionality,
        editPlace: initialState.editPlace,
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
    case SET_ORDER:
      return {
        ...state,
        functionality: {
          ...state.functionality,
          sortingOrder: changeOrderHelper(state.functionality.sortingOrder),
        },
      };
    case SORT_OR_FILTER:
      return {
        ...state,
        functionality: { ...state.functionality, sortOrFilter: action.payload },
      };
    case SET_SORTING_COLUMN:
      return {
        ...state,
        functionality: {
          ...state.functionality,
          sortingColumn: action.payload,
        },
      };
    case SET_FILTER_COLUMN:
      return {
        ...state,
        functionality: { ...state.functionality, filterColumn: action.payload },
      };
    case SET_FILTER_OPERATOR:
      return {
        ...state,
        functionality: {
          ...state.functionality,
          filterOperator: action.payload,
        },
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        functionality: { ...state.functionality, filterValue: action.payload },
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        functionality: { ...state.functionality, pageNumber: action.payload },
      };
    case SET_ROWS_AMOUNT:
      return {
        ...state,
        functionality: { ...state.functionality, rowsAmount: action.payload },
      };
    case SET_EDIT_PLACE:
      return {
        ...state,
        editPlace: action.payload,
      };
    default:
      return state;
  }
};
