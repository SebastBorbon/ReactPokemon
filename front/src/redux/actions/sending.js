import axios from "axios";
import { SIGNUP, LOGIN, GET_URL, TEAM } from "./constants";

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
      console.log(res.data);
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
      console.log(res.data);
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
      return console.log("fallo qui");
    }
  };
};

export const deletePokemon = (userId, pokemonId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${GET_URL}teams/pokemons/pokeId`, {
        userId: userId,
        pokemonId: pokemonId,
      });
      dispatch({ type: TEAM, payload: res.data });
    } catch (err) {
      return console.log("fallo en  el delete Pk");
    }
  };
};

// var = window.localStorage.getItem('userId');
