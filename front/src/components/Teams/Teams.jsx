import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teams } from "../../redux/actions/sending";
import SearchBar from "../SearchBar/SearchBar";
import Pokemon from "../Pokemon/Pokemon";

const Teams = () => {
  const [team, setTeam] = useState([]);
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");
  const teamPokemons = useSelector((state) => state.team.team);

  useEffect(() => {
    if (teamPokemons === undefined) {
      console.log("este es el usuario que mandamos rey", userId);
      dispatch(teams(userId));
    }
  }, [team, teamPokemons]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>hola</h1>
      <div>
        {teamPokemons !== undefined
          ? teamPokemons.map((pokemon) => {
              return (
                <Pokemon
                  key={pokemon.pokeid}
                  pokemonName={pokemon.name}
                  pokemonId={pokemon.pokeId}
                />
              );
            })
          : (console.log("ten tu team", teamPokemons), (<p>eyeye</p>))}
      </div>
      <div>
        {" "}
        <SearchBar />
      </div>
    </div>
  );
};

export default Teams;
