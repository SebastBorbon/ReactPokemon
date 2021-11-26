import "./SearchPk.css";
import { pokemonAdd } from "../../redux/actions/sending";
import { useDispatch } from "react-redux";

const SearchPk = ({ pokemonName, pokeId, sprite }) => {
  //should add a validation that don't dispatch if the pokemon already exists
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");

  return (
    <div className="searchCard">
      <div className="cardSearchPK">
        <div className="nameContainer">
          <p className="pokemonName">{pokemonName}</p>
        </div>
        <p className="pokeId"> {pokeId}</p>
        <div className="imgContainerPkSearched">
          <img className="imgSearched" src={sprite} alt="no sprite" />
        </div>
        <button
          className="addPokemonBtn"
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
