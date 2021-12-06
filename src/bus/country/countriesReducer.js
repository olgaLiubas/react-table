import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_START,
  SET_ORDER,
  SET_FILTER_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
  SET_ROWS_AMOUNT,
  SET_PAGE_NUMBER,
  SET_SORTING_COLUMN,
  SORT_OR_FILTER,
} from "bus/country/types";
import { ASC } from "constants/sortingOrders";
import { changeOrderHelper } from "bus/country/changeOrderHelper";

const initialState = {
  loading: false,
  countries: [],
  succes: false,
  error: null,

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
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        succes: true,
        loading: false,
        countries: action.payload,
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
        functionality: { ...state.functionality, filterColum: action.payload },
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
    default:
      return state;
  }
};
