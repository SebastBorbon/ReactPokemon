import "./SearchPk.css";
import { pokemonAdd } from "../../redux/actions/sending";
import { useDispatch } from "react-redux";

const SearchPk = ({ pokemonName, pokeId, sprite }) => {
  //should add a validation that don't dispatch if the pokemon already exists
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");

  return (
    <div className="cards">
      <div className="cardSearchPK">
        <p>{pokemonName}</p>
        {pokeId}
        <img src={sprite} alt="no sprite" />
        <button
          className="addPokemon"
          onClick={(e) => {
            e.preventDefault();
            dispatch(pokemonAdd(userId, pokemonName));
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SearchPk;
