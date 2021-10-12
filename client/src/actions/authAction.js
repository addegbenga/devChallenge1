import {
  REGISTER_ERROR,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_ERROR,
  LOAD_USER,
  LOAD_USER_ERROR,
  EDIT_USER_DETAILS,
  EDIT_USER_DETAILS_ERROR,
  LOADING,
} from "./types";

import { api } from "../utils/api";

const END_POINT = "http://localhost:5000/v1/auth";

export const loadUser = () => async (dispatch) => {
  try {

    const response = await api.get(`${END_POINT}/me`);

    dispatch({
      type: LOAD_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_ERROR,
      payload: error,
    });
  }
};

export const loginUser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.post(`${END_POINT}/login`, body);
    dispatch({
      type: LOGIN_USER,
      payload: response.data,
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data,
    });
  }
};

export const registerUser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.post(`${END_POINT}/register`, body);
    dispatch({
      type: REGISTER_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload: error.response.data,
    });
  }
};

export const editUser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.post(`${END_POINT}/edit`, body);
    dispatch({
      type: EDIT_USER_DETAILS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_USER_DETAILS_ERROR,
      payload: error.response.data,
    });
  }
};

export const logOutUser = () => async (dispatch) => {
  try {
    const response = await api.post("");
    dispatch({
      type: LOGOUT_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "SUCCESS",
    });
  }
};
