import react, { useState } from "react";

const Pokemon = ({ pokemonName, pokemonId }) => {
  return (
    <div>
      <div className="nombrePokemon">
        <p>quien es ese pokemon</p>

        {pokemonName}
        {pokemonId}
      </div>
    </div>
  );
};

export default Pokemon;
