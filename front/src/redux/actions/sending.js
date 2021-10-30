import axios from "axios";
import { SIGNUP, LOGIN, GET_URL } from "./constants";

export const logIn = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${GET_URL}auth/login`, user);
      window.localStorage.setItem("userId", res.data.userId.toString());
      dispatch({ type: LOGIN, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    console.log("esto es lo que mandamos rey", user);
    try {
      console.log("request casi hecha");
      const res = await axios.post(`${GET_URL}auth/signup`, user);
      console.log(res.data);
      window.localStorage.setItem("userId", res.data.userId.toString());
      dispatch({ type: SIGNUP, payload: res.data });
    } catch (err) {
      return console.log("fallo en el signup");
    }
  };
};

// var = window.localStorage.getItem('userId')
