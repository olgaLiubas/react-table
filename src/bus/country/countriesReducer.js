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
  SET_EDIT_COUNTRY,
  PUT_COUNTRY_SUCCESS,
  PUT_COUNTRY_ERROR,
  PUT_COUNTRY_START,
  PREPARE_NEW_UPDATING_REQ,
  PREPARE_NEW_FETCHING_REQ,
} from "bus/country/types";
import { ASC } from "constants/sortingOrders";
import { changeOrderHelper } from "bus/country/changeOrderHelper";

const initialState = {
  countries: [],

  fetchingCountries: {
    loading: false,
    success: false,
    error: null,
  },

  updatingCountries: {
    loading: false,
    success: false,
    error: null,
  },

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

  editCountry: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREPARE_NEW_UPDATING_REQ:
      return {
        ...state,
        updatingCountries: {
          ...state.updatingCountries,
          success: false,
          error: null,
        },
      };
    case PREPARE_NEW_FETCHING_REQ:
      return {
        ...state,
        fetchingCountries: {
          ...state.fetchingCountries,
          success: false,
          error: null,
        },
      };
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        fetchingCountries: {
          ...state.fetchingCountries,
          loading: true,
        },
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        fetchingCountries: {
          ...state.fetchingCountries,
          success: true,
          loading: false,
        },
        countries: action.payload,
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        fetchingCountries: {
          ...state.fetchingCountries,
          loading: false,
          error: action.payload,
        },
      };
    case PUT_COUNTRY_START:
      return {
        ...state,
        updatingCountries: {
          ...state.updatingCountries,
          loading: true,
        },
      };
    case PUT_COUNTRY_SUCCESS:
      return {
        ...state,
        updatingCountries: {
          ...state.updatingCountries,
          success: true,
          loading: false,
        },
      };
    case PUT_COUNTRY_ERROR:
      return {
        ...state,
        updatingCountries: {
          ...state.updatingCountries,
          loading: false,
          error: action.payload,
        },
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
    case SET_EDIT_COUNTRY:
      return {
        ...state,
        editCountry: action.payload,
      };
    default:
      return state;
  }
};
