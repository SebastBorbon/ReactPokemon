import "./Pokemon.css";

const Pokemon = ({ pokemonName, pokemonId, sprite }) => {
  return (
    <div className="cards">
      <div className="cardPokemon">
        <button className="btnClose">X</button>
        <p>{pokemonName}</p>
        {pokemonId}
        <img src={sprite} alt="no sprite" />
      </div>
    </div>
  );
};

export default Pokemon;
