import {
  LOGIN_USER,
  REGISTER_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  GET_AUTH_USER,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  loading: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
