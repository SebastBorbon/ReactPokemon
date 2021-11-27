import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teams } from "../../redux/actions/sending";
import { useHistory } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import Pokemon from "../Pokemon/Pokemon";
import SearchPk from "../SearchPk/SearchPk";
import "./Teams.css";
import axios from "axios";
import pokeball from "../../images/pokeball.png";

const Teams = () => {
  const [searchPokemons, setSearchPokemons] = useState([]);
  const dispatch = useDispatch();
  const teamPokemons = useSelector((state) => state.team.team);

  let userId = window.localStorage.getItem("userId");

  const history = useHistory();

  useEffect(() => {
    if (!userId) {
      history.push("/");
      window.location.reload();
    } else {
      if (teamPokemons === undefined) {
        dispatch(teams(userId));
      } else {
        teamPokemons.forEach((pokemon) => {
          console.log(pokemon.name);
        });
      }
    }
  }, [dispatch, userId, teamPokemons, searchPokemons]);

  const onSearch = async (pokeSearched) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeSearched.toLowerCase()}`
      );
      const pokemon = {
        name: response.data.name.toLowerCase(),
        pokeId: response.data.id,
        sprite: response.data.sprites.other.home.front_default,
      };

      setSearchPokemons(() => [pokemon]);
    } catch (err) {
      console.log("no se pudo hacer la solicitud");
    }
  };

  const logOut = () => {
    if (userId) {
      window.localStorage.removeItem("userId");
      history.push("/");
      window.location.reload();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <div className="ComponentTeams">
      <div className="titleTeamContainer">
        <h1 className="textTeam">Your team</h1>
        <div className="ballContainer">
          <img src={pokeball} alt="cant charge img" className="pokeball" />
        </div>
      </div>

      <div className="Searches">
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
            : console.log()}
        </div>
        <div className="LogOut">
          <button className="btnLogOut" onClick={(e) => handleSubmit(e)}>
            Logout
          </button>
        </div>
      </div>

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
          : console.log()}
      </div>
    </div>
  );
};

export default Teams;
