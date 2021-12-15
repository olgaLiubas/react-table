import {
  FETCH_STATES_SUCCESS,
  FETCH_STATES_START,
  FETCH_STATES_ERROR,
  SET_EDIT_STATE,
  UPDATE_STATES_START,
  UPDATE_STATES_ERROR,
  UPDATE_STATES_SUCCESS,
  SET_ORDER,
  SET_FILTER_COLUMN,
  SET_SORTING_COLUMN,
  SET_FILTER_OPERATOR,
  SET_FILTER_VALUE,
  SET_ROWS_AMOUNT,
  SET_PAGE_NUMBER,
  SORT_OR_FILTER,
  PREPARE_NEW_UPDATING_REQ,
  PREPARE_NEW_FETCHING_REQ,
} from "bus/states/types";
import { ASC } from "constants/sortingOrders";
import { changeOrderHelper } from "bus/country/changeOrderHelper";

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

  editState: null,
};

export const statesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREPARE_NEW_UPDATING_REQ:
      return {
        ...state,
        updatingStates: {
          ...state.updatingStates,
          success: false,
          error: null,
        },
      };
    case PREPARE_NEW_FETCHING_REQ:
      return {
        ...state,
        fetchingStates: {
          ...state.fetchingStates,
          success: false,
          error: null,
        },
      };
    case FETCH_STATES_START:
      return {
        ...state,
        fetchingStates: {
          ...state.fetchingStates,
          loading: true,
        },
      };
    case FETCH_STATES_SUCCESS:
      return {
        ...state,
        fetchingStates: {
          ...state.fetchingStates,
          success: true,
          loading: false,
        },
        states: action.payload,
      };
    case FETCH_STATES_ERROR:
      return {
        ...state,
        fetchingStates: {
          ...state.fetchingStates,
          loading: false,
          error: action.payload,
        },
      };
    case UPDATE_STATES_START:
      return {
        ...state,
        updatingStates: {
          ...state.updatingStates,
          loading: true,
        },
      };
    case UPDATE_STATES_SUCCESS:
      return {
        ...state,
        updatingStates: {
          ...state.updatingStates,
          success: true,
          loading: false,
        },
      };
    case UPDATE_STATES_ERROR:
      return {
        ...state,
        updatingStates: {
          ...state.updatingStates,
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
        functionality: { ...state.functionality, filterColumn: action.payload },
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
    case SET_EDIT_STATE:
      return {
        ...state,
        editState: action.payload,
      };
    default:
      return state;
  }
};
