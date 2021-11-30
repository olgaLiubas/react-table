import {
  SET_COUNTRIES,
  SET_ORDER,
  SET_FILTER_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
} from "redux/types";
import { asc } from "constants/sortingOrders";
import { changeOrderHelper } from "bus/changeOrderHelper";

const initialState = {
  countries: [],
  sortingOrder: asc,
  filterColumn: "Name",
  filterOperator: "contains",
  filterValue: "",
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
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
