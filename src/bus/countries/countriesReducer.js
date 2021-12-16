import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_START,
  UPDATE_COUNTRY_SUCCESS,
  UPDATE_COUNTRY_ERROR,
  UPDATE_COUNTRY_START,
  PREPARE_NEW_UPDATING_REQ_COUNTRIES,
  PREPARE_NEW_FETCHING_REQ_COUNTRIES,
  HIDE_COLUMN,
} from "bus/countries/types";

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

  columns: {
    idColumn: true,
    nameColumn: true,
    capitalColumn: true,
    phoneCodeColumn: true,
    isoColumn: true,
    currencyColumn: true,
  },
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREPARE_NEW_UPDATING_REQ_COUNTRIES:
      return {
        ...state,
        updatingCountries: {
          ...state.updatingCountries,
          success: false,
          error: null,
        },
      };
    case PREPARE_NEW_FETCHING_REQ_COUNTRIES:
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
    case FETCH_COUNTRIES_SUCCESS:
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
    case UPDATE_COUNTRY_START:
      return {
        ...state,
        updatingCountries: {
          ...state.updatingCountries,
          loading: true,
        },
      };
    case UPDATE_COUNTRY_SUCCESS:
      return {
        ...state,
        updatingCountries: {
          ...state.updatingCountries,
          success: true,
          loading: false,
        },
      };
    case UPDATE_COUNTRY_ERROR:
      return {
        ...state,
        updatingCountries: {
          ...state.updatingCountries,
          loading: false,
          error: action.payload,
        },
      };
    case HIDE_COLUMN:
      return {
        ...state,
        columns: {
          ...state.columns,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
