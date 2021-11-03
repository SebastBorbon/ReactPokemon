import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { pokemonAdd } from "../../redux/actions/sending";

const SearchBar = ({ onSearch }) => {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");

  // useEffect(
  //   () => {
  //     pokemonName.map((pokemon) => {
  //       console.log(pokemon.name);
  //     });
  //     dispatch(pokemonSearch(userId, search));
  //   },
  //   [pokemonName, search]
  // );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(pokemon);
        }}
      >
        <input
          type="text"
          placeholder="buscar pokemon"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />

        <input type="submit" value="Buscar" />
      </form>
      <button className="addBtn">Deberia aniadir todos</button>
    </div>
  );
};

export default SearchBar;
