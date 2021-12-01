// import { useReducer } from "react";
import { LOGIN, SIGNUP, TEAM, ERROR, CLEANERROR } from "../actions/constants";

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
    case CLEANERROR:
      return {
        ...state,
        error: [],
      };
    default:
      return state;
  }
}
