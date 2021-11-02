import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonSearch } from "../../redux/actions/sending";

const SearchBar = () => {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();

  // useEffect(() =>{

  // })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(pokemonSearch(e.target.value));
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
  );
};

export default SearchBar;
