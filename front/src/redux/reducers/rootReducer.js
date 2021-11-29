// import { useReducer } from "react";
import { LOGIN, SIGNUP, TEAM, ERROR } from "../actions/constants";

const initialState = {
  logged: false,
  user: [],
  team: [],
  error: [],
};
//I update the states with the backend response
export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SIGNUP:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case TEAM:
      return {
        ...state,
        team: action.payload,
      };
    default:
      return state;
  }
}
