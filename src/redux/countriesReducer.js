import { SET_COUNTRIES, SET_FILTER } from "redux/types";

const initialState = {
  countries: [],
  sortingOrder: "asc",
  filterColumn: "Name",
  filterOperator: "contains",
  filterValue: "",
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
    case SET_FILTER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
