import {
  FETCH_STATES_SUCCESS,
  FETCH_STATES_START,
  FETCH_STATES_ERROR,
  UPDATE_STATES_SUCCESS,
  UPDATE_STATES_ERROR,
  UPDATE_STATES_START,
  PREPARE_NEW_UPDATING_REQ_STATES,
  PREPARE_NEW_FETCHING_REQ_STATES,
  HIDE_STATES_COLUMN,
} from "bus/states/types";

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
    stateCodeColumn: true,
    countryIdColumn: true,
    latitudeColumn: true,
    longitudeColumn: true,
  },
};

export const statesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREPARE_NEW_UPDATING_REQ_STATES:
      return {
        ...state,
        updatingData: {
          ...state.updatingData,
          success: false,
          error: null,
        },
      };
    case PREPARE_NEW_FETCHING_REQ_STATES:
      return {
        ...state,
        fetchingData: {
          ...state.fetchingData,
          success: false,
          error: null,
        },
      };
    case FETCH_STATES_START:
      return {
        ...state,
        fetchingData: {
          ...state.fetchingData,
          loading: true,
        },
      };
    case FETCH_STATES_SUCCESS:
      return {
        ...state,
        fetchingData: {
          ...state.fetchingData,
          success: true,
          loading: false,
        },
        states: action.payload,
      };
    case FETCH_STATES_ERROR:
      return {
        ...state,
        fetchingData: {
          ...state.fetchingData,
          loading: false,
          error: action.payload,
        },
      };
    case UPDATE_STATES_START:
      return {
        ...state,
        updatingData: {
          ...state.updatingData,
          loading: true,
        },
      };
    case UPDATE_STATES_SUCCESS:
      return {
        ...state,
        updatingData: {
          ...state.updatingData,
          success: true,
          loading: false,
        },
      };
    case UPDATE_STATES_ERROR:
      return {
        ...state,
        updatingData: {
          ...state.updatingData,
          loading: false,
          error: action.payload,
        },
      };
    case HIDE_STATES_COLUMN:
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
