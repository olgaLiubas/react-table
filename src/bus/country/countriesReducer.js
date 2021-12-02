import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_START,
  SET_ORDER,
  SET_FILTER_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
} from "bus/country/types";
import { ASC } from "constants/sortingOrders";
import { changeOrderHelper } from "bus/ui/changeOrderHelper";

const initialState = {
  loading: false,
  countries: [],
  succes: false,
  error: null,
  sortingOrder: ASC,
  filterColumn: "Name",
  filterOperator: "contains",
  filterValue: "",
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        succes: false,
        loading: true,
        countries: [],
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
        succes: false,
        loading: false,
        countries: [],
        error: action.payload,
      };
    case SET_ORDER:
      return {
        ...state,
        sortingOrder: changeOrderHelper(action.payload),
      };
    case SET_FILTER_COLUMN:
      return {
        ...state,
        filterColumn: action.payload,
      };
    case SET_FILTER_OPERATOR:
      return {
        ...state,
        filterOperator: action.payload,
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload,
      };
    default:
      return state;
  }
};
