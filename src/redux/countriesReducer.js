import { SET_COUNTRIES } from "redux/types";

const initialState = {
  countries: [],
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};
