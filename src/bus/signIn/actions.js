import {
  SET_USER_TOKEN_FOR_SAGA,
  SET_USER_TOKEN_START,
  SET_USER_TOKEN_SUCCESS,
  SET_USER_TOKEN_ERROR,
  DELETE_USER_TOKEN_FOR_SAGA,
  DELETE_USER_TOKEN_START,
  DELETE_USER_TOKEN_SUCCESS,
  DELETE_USER_TOKEN_ERROR,
} from "bus/signIn/types";

export const setUserDataForSaga = (values) => ({
  type: SET_USER_TOKEN_FOR_SAGA,
  payload: values,
});

export const setUserTokenStart = () => ({
  type: SET_USER_TOKEN_START,
});

export const setUserTokenSuccess = (token) => ({
  type: SET_USER_TOKEN_SUCCESS,
  payload: token,
});

export const setUserTokenError = () => ({
  type: SET_USER_TOKEN_ERROR,
});

export const deleteUserDataForSaga = (values) => ({
  type: DELETE_USER_TOKEN_FOR_SAGA,
  payload: values,
});

export const deleteUserTokenStart = () => ({
  type: DELETE_USER_TOKEN_START,
});

export const deleteUserTokenSuccess = () => ({
  type: DELETE_USER_TOKEN_SUCCESS,
});

export const deleteUserTokenError = () => ({
  type: DELETE_USER_TOKEN_ERROR,
});
