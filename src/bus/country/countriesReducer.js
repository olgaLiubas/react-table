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
  SET_EDIT_COUNTRY_NAME,
  SET_EDIT_COUNTRY_CAPITAL,
  SET_EDIT_COUNTRY_PHONE_CODE,
  SET_EDIT_COUNTRY_CURRENCY,
  SET_EDIT_COUNTRY_ISO,
  PUT_COUNTRY_SUCCESS,
  PUT_COUNTRY_ERROR,
  PUT_COUNTRY_START,
  PREPARE_NEW_PUT_REQ,
  PREPARE_NEW_GET_REQ,
} from "bus/country/types";
import { ASC } from "constants/sortingOrders";
import { changeOrderHelper } from "bus/country/changeOrderHelper";

const initialState = {
  countries: [],

  loadingGet: false,
  successGet: false,
  errorGet: null,

  loadingPut: false,
  successPut: false,
  errorPut: null,

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
    case PREPARE_NEW_PUT_REQ:
      return {
        ...state,
        successPut: false,
        errorPut: null,
      };
    case PREPARE_NEW_GET_REQ:
      return {
        ...state,
        successGet: false,
        errorGet: null,
      };
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        loadingGet: true,
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        successGet: true,
        loadingGet: false,
        countries: action.payload,
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        loadingGet: false,
        errorGet: action.payload,
      };
    case PUT_COUNTRY_START:
      return {
        ...state,
        loadingPut: true,
      };
    case PUT_COUNTRY_SUCCESS:
      return {
        ...state,
        successPut: true,
        loadingPut: false,
      };
    case PUT_COUNTRY_ERROR:
      return {
        ...state,
        loadingPut: false,
        errorPut: action.payload,
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
    case SET_EDIT_COUNTRY_NAME:
      return {
        ...state,
        editCountry: { ...state.editCountry, name: action.payload },
      };
    case SET_EDIT_COUNTRY_CAPITAL:
      return {
        ...state,
        editCountry: { ...state.editCountry, capital: action.payload },
      };
    case SET_EDIT_COUNTRY_PHONE_CODE:
      return {
        ...state,
        editCountry: { ...state.editCountry, phone_code: action.payload },
      };
    case SET_EDIT_COUNTRY_CURRENCY:
      return {
        ...state,
        editCountry: { ...state.editCountry, currency: action.payload },
      };
    case SET_EDIT_COUNTRY_ISO:
      return {
        ...state,
        editCountry: { ...state.editCountry, iso3: action.payload },
      };
    default:
      return state;
  }
};
