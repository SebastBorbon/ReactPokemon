import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teams } from "../../redux/actions/sending";
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

  useEffect(() => {
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

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
                  key={pokemon.pokeid}
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
                  key={pokemon.pokeid}
                  pokemonName={pokemon.name}
                  sprite={pokemon.sprite}
                />
              );
            })
          : console.log("no se pudo renderizar el equipo")}
      </div>
    </div>
  );
};

export default Teams;
