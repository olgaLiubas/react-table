import {
  SET_USER_TOKEN_START,
  SET_USER_TOKEN_SUCCESS,
  SET_USER_TOKEN_ERROR,
  DELETE_USER_TOKEN_START,
  DELETE_USER_TOKEN_SUCCESS,
  DELETE_USER_TOKEN_ERROR,
} from "bus/signIn/types";

const initialState = {
  token: localStorage.getItem("token"),

  setttingData: {
    loading: false,
    success: false,
    error: null,
  },

  deletingData: {
    loading: false,
    success: false,
    error: null,
  },
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN_START:
      return {
        ...state,
        settingData: {
          ...state.settingData,
          loading: true,
        },
      };
    case SET_USER_TOKEN_SUCCESS:
      return {
        ...state,
        settingData: {
          ...state.settingData,
          success: true,
          loading: false,
        },
        token: action.payload,
      };
    case SET_USER_TOKEN_ERROR:
      return {
        ...state,
        settingData: {
          ...state.settingData,
          loading: false,
          error: action.payload,
        },
      };
    case DELETE_USER_TOKEN_START:
      return {
        ...state,
        deletingData: {
          ...state.deletingData,
          loading: true,
        },
      };
    case DELETE_USER_TOKEN_SUCCESS:
      return {
        ...state,
        deletingData: {
          ...state.deletingData,
          success: true,
          loading: false,
        },
        token: null,
      };
    case DELETE_USER_TOKEN_ERROR:
      return {
        ...state,
        deletingData: {
          ...state.deletingData,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};
