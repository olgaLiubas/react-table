import {
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_START,
  FETCH_CITIES_ERROR,
  UPDATE_CITIES_SUCCESS,
  UPDATE_CITIES_ERROR,
  UPDATE_CITIES_START,
  PREPARE_NEW_UPDATING_REQ_CITIES,
  PREPARE_NEW_FETCHING_REQ_CITIES,
  HIDE_CITIES_COLUMN,
} from "bus/cities/types";

const initialState = {
  states: [],

  fetchingData: {
    loading: false,
    success: false,
    error: null,
  },

  updatingData: {
    loading: false,
    success: false,
    error: null,
  },

  columns: {
    idColumn: true,
    nameColumn: true,
    stateIdColumn: true,
    stateCodeColumn: true,
    countryIdColumn: true,
    countryCodeColumn: true,
  },
};

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREPARE_NEW_UPDATING_REQ_CITIES:
      return {
        ...state,
        updatingData: {
          ...state.updatingData,
          success: false,
          error: null,
        },
      };
    case PREPARE_NEW_FETCHING_REQ_CITIES:
      return {
        ...state,
        fetchingData: {
          ...state.fetchingData,
          success: false,
          error: null,
        },
      };
    case FETCH_CITIES_START:
      return {
        ...state,
        fetchingData: {
          ...state.fetchingData,
          loading: true,
        },
      };
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        fetchingData: {
          ...state.fetchingData,
          success: true,
          loading: false,
        },
        states: action.payload,
      };
    case FETCH_CITIES_ERROR:
      return {
        ...state,
        fetchingData: {
          ...state.fetchingData,
          loading: false,
          error: action.payload,
        },
      };
    case UPDATE_CITIES_START:
      return {
        ...state,
        updatingData: {
          ...state.updatingData,
          loading: true,
        },
      };
    case UPDATE_CITIES_SUCCESS:
      return {
        ...state,
        updatingData: {
          ...state.updatingData,
          success: true,
          loading: false,
        },
      };
    case UPDATE_CITIES_ERROR:
      return {
        ...state,
        updatingData: {
          ...state.updatingData,
          loading: false,
          error: action.payload,
        },
      };
    case HIDE_CITIES_COLUMN:
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
