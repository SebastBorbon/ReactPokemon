import axios from "axios";
import { LOGIN, GET_URL } from "./constants";

export const logIn = (user) => {
  return async (dispatch) => {
    console.log("esto es lo que mandamos rey", user);
    try {
      console.log("request casi hecha");
      const res = await axios.post(`${GET_URL}auth/login`, user);
      console.log(res);
      window.localStorage.setItem("userId", res.data.userId.toString());

      dispatch({ type: LOGIN, payload: res.data });
    } catch (err) {
      return console.log("fallo en el sending");
    }
  };
};

// var = window.localStorage.getItem('userId')
