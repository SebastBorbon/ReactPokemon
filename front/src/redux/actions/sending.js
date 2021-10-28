import axios from "axios";
import { LOGIN, GET_URL } from "./constants";

export const logIn = (user) => {
  return async (dispatch) => {
    let apiRes;
    console.log('"esto es lo que mandamos rey", user');
    try {
      console.log("request casi hecha");
      await axios.post(`${GET_URL}auth/login`, user);
      dispatch({ type: LOGIN, payload: user });
      console.log(apiRes.data);
    } catch (err) {
      return console.log("fallo en el sending");
    }
  };
};
