import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teams } from "../../redux/actions/sending";
import { useHistory } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import Pokemon from "../Pokemon/Pokemon";
import SearchPk from "../SearchPk/SearchPk";
import "./Teams.css";
import axios from "axios";
import pokeball from "../../images/Pokebola.png";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}
const Teams = () => {
  //TODO add alerts for incorrect credentials!
  const [searchPokemons, setSearchPokemons] = useState([]);
  const dispatch = useDispatch();
  const teamPokemons = useSelector((state) => state.team.team);

  let userId = window.localStorage.getItem("userId");

  const history = useHistory();

  useEffect(() => {
    if (!userId) {
      history.push("/");
      window.location.reload();
    } else if (teamPokemons === undefined) {
      dispatch(teams(userId));
    }
  }, [dispatch, userId, teamPokemons, history]);

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
    } catch {
      toast.dark("invalid search!");
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
        <h1 className="textTeam">Your team:</h1>
        <div className="ballContainer">
          {teamPokemons !== undefined
            ? teamPokemons.map(() => {
                return (
                  <img
                    src={pokeball}
                    alt="cant charge img"
                    className="pokeball"
                  />
                );
              })
            : console.log()}
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
      <ToastContainer />
    </div>
  );
};

export default Teams;
