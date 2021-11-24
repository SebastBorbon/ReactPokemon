import axios from "axios";
import { SIGNUP, LOGIN, GET_URL, TEAM } from "./constants";

//data send to the backend and save the response in the reducer
//I used axios to post in the backend server
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
    try {
      const res = await axios.post(`${GET_URL}auth/signup`, user);

      window.localStorage.setItem("userId", res.data.userId.toString());
      dispatch({ type: SIGNUP, payload: res.data });
    } catch (err) {
      return console.log("fallo en el signup");
    }
  };
};

export const teams = (userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${GET_URL}teams`, { userId: userId });

      dispatch({ type: TEAM, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const pokemonAdd = (userId, pokemonName) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${GET_URL}teams/pokemons`, {
        userId: userId,
        pokemonName: pokemonName,
      });
      dispatch({ type: TEAM, payload: res.data });
    } catch (err) {
      return console.log("fallo pokemonAdd");
    }
  };
};

export const deletePokemon = (userId, pokemonId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`${GET_URL}teams/pokemons`, {
        data: {
          userId: userId,
          pokemonId: pokemonId,
        },
      });
      dispatch({ type: TEAM, payload: res.data });
    } catch (err) {
      return console.log("fallo en  el delete Pk");
    }
  };
};
