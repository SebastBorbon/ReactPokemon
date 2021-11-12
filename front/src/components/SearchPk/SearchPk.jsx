import "./SearchPk.css";

import { pokemonAdd } from "../../redux/actions/sending";
import { useDispatch } from "react-redux";

const SearchPk = ({ pokemonName, key, sprite }) => {
  const dispatch = useDispatch();

  let userId = window.localStorage.getItem("userId");
  return (
    <div className="cards">
      <div className="cardSearchPK">
        {console.log(pokemonName, key)}
        <button className="btnClose">X</button>
        <p>{pokemonName}</p>
        {key}
        <img src={sprite} alt="no sprite" />
        <button
          className="addPokemon"
          onClick={(e) => {
            e.preventDefault();
            console.log("el pokemon anadido sera", pokemonName);
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
