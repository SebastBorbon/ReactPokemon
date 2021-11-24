import "./SearchPk.css";
import { pokemonAdd } from "../../redux/actions/sending";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { teams } from "../../redux/actions/sending";

const SearchPk = ({ pokemonName, key, sprite }) => {
  //should add a validation that don't dispatch if the pokemon already exists
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");
  const teamPokemons = useSelector((state) => state.team.team);

  useEffect(() => {
    if (teamPokemons === undefined) {
      dispatch(teams(userId));
    } else {
      console.log("este es el teams de searchPK", teamPokemons[0]);
    }
  }, [dispatch, teamPokemons]);

  const validateTeam = (e) => {
    console.log("este es el id del pokemon a agregar", teamPokemons[0].pokeId);
    if (teamPokemons[0].pokeId === undefined) {
      for (let i = 0; i <= teamPokemons.length; i++) {
        if (teamPokemons[i].pokeId === key) {
          return console.log("no deberia serchear");
        }
      }
    } else {
      e.preventDefault();
      dispatch(pokemonAdd(userId, pokemonName));
    }
  };

  return (
    <div className="cards">
      <div className="cardSearchPK">
        {console.log(pokemonName, key)}
        <p>{pokemonName}</p>
        {key}
        <img src={sprite} alt="no sprite" />
        <button
          className="addPokemon"
          onClick={(e) => {
            validateTeam(e);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SearchPk;
