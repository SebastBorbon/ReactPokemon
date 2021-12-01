import axios from "axios";
import { SIGNUP, LOGIN, GET_URL, TEAM, ERROR, CLEANERROR } from "./constants";

//data send to the backend and save the response in the reducer
//I used axios to post in the backend server
export const logIn = (email, password) => {
  return async (dispatch) => {
    try {
      let data = {
        email: email,
        password: password,
      };
      const res = await axios.post(`${GET_URL}auth/login`, data);
      window.localStorage.setItem("userId", res.data.userId.toString());
      dispatch({ type: LOGIN, payload: res.data });
    } catch (err) {
      const res = err.response.data;
      dispatch({ type: ERROR, payload: res });
    }
  };
};

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      let data = {
        email: email,
        password: password,
      };
      const res = await axios.post(`${GET_URL}auth/signup`, data);
      window.localStorage.setItem("userId", res.data.userId.toString());
      dispatch({ type: SIGNUP, payload: res.data });
    } catch (err) {
      const res = err.response.data;
      dispatch({ type: ERROR, payload: res });
    }
  };
};

export const teams = (userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${GET_URL}teams`, { userId: userId });
      dispatch({ type: TEAM, payload: res.data });
    } catch (err) {
      const res = err.response.data;

      dispatch({ type: ERROR, payload: res });
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
      const res = err.response.data;

      dispatch({ type: ERROR, payload: res });
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
      const res = err.response.data;

      dispatch({ type: ERROR, payload: res });
    }
  };
};

export const cleanError = () => {
  return async (dispatch) => {
    dispatch({ type: CLEANERROR });
  };
};
