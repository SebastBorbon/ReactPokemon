// import { useReducer } from "react";
import { LOGIN, SIGNUP, TEAM } from "../actions/constants";

const initialState = {
  logged: false,
  user: [],
  team: [],
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
