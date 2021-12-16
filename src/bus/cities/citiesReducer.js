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

  fetchingStates: {
    loading: false,
    success: false,
    error: null,
  },

  updatingStates: {
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
        updatingStates: {
          ...state.updatingStates,
          success: false,
          error: null,
        },
      };
    case PREPARE_NEW_FETCHING_REQ_CITIES:
      return {
        ...state,
        fetchingStates: {
          ...state.fetchingStates,
          success: false,
          error: null,
        },
      };
    case FETCH_CITIES_START:
      return {
        ...state,
        fetchingStates: {
          ...state.fetchingStates,
          loading: true,
        },
      };
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        fetchingStates: {
          ...state.fetchingStates,
          success: true,
          loading: false,
        },
        states: action.payload,
      };
    case FETCH_CITIES_ERROR:
      return {
        ...state,
        fetchingStates: {
          ...state.fetchingStates,
          loading: false,
          error: action.payload,
        },
      };
    case UPDATE_CITIES_START:
      return {
        ...state,
        updatingStates: {
          ...state.updatingStates,
          loading: true,
        },
      };
    case UPDATE_CITIES_SUCCESS:
      return {
        ...state,
        updatingStates: {
          ...state.updatingStates,
          success: true,
          loading: false,
        },
      };
    case UPDATE_CITIES_ERROR:
      return {
        ...state,
        updatingStates: {
          ...state.updatingStates,
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
