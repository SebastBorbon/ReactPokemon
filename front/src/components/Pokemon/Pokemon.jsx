import "./Pokemon.css";
import { useDispatch } from "react-redux";
import { deletePokemon } from "../../redux/actions/sending";

const Pokemon = ({ pokemonName, pokeId, sprite }) => {
  const dispatch = useDispatch();
  //I saved the userId on localStorage to mantain the session active
  let userId = window.localStorage.getItem("userId");
  return (
    <div className="cards">
      <div className="cardPokemon">
        <button
          className="btnDelete"
          onClick={(e) => {
            e.preventDefault();
            dispatch(deletePokemon(userId, pokeId));
          }}
        >
          X
        </button>
        <p>{pokemonName}</p>
        <p>{pokeId}</p>
        <img src={sprite} alt="no sprite" />
      </div>
    </div>
  );
};

export default Pokemon;
