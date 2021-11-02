// import { useReducer } from "react";
import { LOGIN, SIGNUP, TEAM, SEARCH } from "../actions/constants";

const initialState = {
  logged: false,
  user: {},
  team: [],
  search: [],
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
    case TEAM:
      return {
        ...state,
        team: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}
