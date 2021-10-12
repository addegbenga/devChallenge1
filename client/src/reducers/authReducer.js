import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  LOAD_USER,
  LOAD_USER_ERROR,
  LOADING,
  REGISTER_ERROR,
  CLEAR_ALERT,
  EDIT_USER_DETAILS,
  EDIT_USER_DETAILS_ERROR,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  pageloading: true,
  apiloading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        pageloading: false,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        pageloading: false,
      };

    case EDIT_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
        apiloading: false,
        pageloading: false,
      };
    case EDIT_USER_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        apiloading: false,
        pageloading: false,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        apiloading: false,
        pageloading: false,
        error: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        apiloading: false,
        pageloading: false,
      };
    case LOGOUT_USER:
    case LOAD_USER_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        apiloading: false,
        pageloading: false,
        user: null,
      };
    case LOADING:
      return {
        ...state,
        apiloading: true,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        error: null,
        user: null,
        pageloading: false,
      };
    default:
      return state;
  }
};
