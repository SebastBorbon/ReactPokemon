// import { useReducer } from "react";
import { LOGIN, SIGNUP } from "../actions/constants";

const initialState = {
  logged: false,
  user: {},
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case SIGNUP:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    default:
      return state;
  }
}
