import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teams } from "../../redux/actions/sending";
import { useHistory } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import Pokemon from "../Pokemon/Pokemon";
import SearchPk from "../SearchPk/SearchPk";
import "./Teams.css";
import axios from "axios";

const Teams = () => {
  const [team, setTeam] = useState([]);
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");
  const teamPokemons = useSelector((state) => state.team.team);
  const [searchPokemons, setSearchPokemons] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // if (!userId) {
    //   history.push("/Login");
    //   window.location.reload();
    // } else {
    if (teamPokemons === undefined) {
      dispatch(teams(userId));
    } else {
      teamPokemons.map((pokemon) => {
        console.log(pokemon.name);
      });
    }
  }, [team, teamPokemons, searchPokemons]);

  const onSearch = async (searchPk) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchPk}`
      );
      const pokemon = {
        name: searchPk,
        pokeId: response.data.id,
        sprite: response.data.sprites.front_default,
      };
      setSearchPokemons((oldPokemon) => [...oldPokemon, pokemon]);
      console.log(searchPokemons, " es el pokemon enviado");
    } catch (err) {
      console.log("no se pudo hacer la solicitud");
    }
  };

  const logOut = () => {
    if (userId) {
      window.localStorage.removeItem(userId);
      history.push("/Login");
      window.location.reload();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <div>
      <div className="SearchBar">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="PokemonSearched">
        {searchPokemons !== undefined
          ? searchPokemons.map((pokemon) => {
              return (
                <SearchPk
                  pokeId={pokemon.pokeId}
                  pokemonName={pokemon.name}
                  sprite={pokemon.sprite}
                />
              );
            })
          : console.log("no se pudo renderizar el equipo")}
      </div>

      <h1 className="textTeam">Your team</h1>
      <div className="Team">
        {teamPokemons !== undefined
          ? teamPokemons.map((pokemon) => {
              return (
                <Pokemon
                  pokeId={pokemon.pokeId}
                  pokemonName={pokemon.name}
                  sprite={pokemon.sprite}
                />
              );
            })
          : console.log("no se pudo renderizar el equipo")}
      </div>
      <div className="LogOut">
        <button className="btnLogOut" onClick={(e) => handleSubmit(e)}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Teams;
