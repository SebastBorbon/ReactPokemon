// import { useReducer } from "react";
import { LOGIN } from "../actions/constants";

const initialState = {
  isLogin: false,
  user: {},
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };
    default:
      return state;
  }
}
