// import { useReducer } from "react";
import { LOGIN } from "../actions/constants";

let username = JSON.parse(localStorage.getItem("username"));
let password = JSON.parse(localStorage.getItem("password"));
const initialState = {
  isLogin: false,
  username,
  password,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
}
