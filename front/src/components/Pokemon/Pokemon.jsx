import "./Pokemon.css";
import { useDispatch } from "react-redux";
import { deletePokemon } from "../../redux/actions/sending";

const Pokemon = ({ pokemonName, pokemonId, sprite }) => {
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");
  return (
    <div className="cards">
      <div className="cardPokemon">
        <button
          className="btnDelete"
          onClick={(e) => {
            e.preventDefault();
            console.log("el pokemon anadido sera", pokemonName);
            dispatch(deletePokemon(userId, pokemonId));
          }}
        >
          X
        </button>
        <p>{pokemonName}</p>
        {pokemonId}
        <img src={sprite} alt="no sprite" />
      </div>
    </div>
  );
};

export default Pokemon;
