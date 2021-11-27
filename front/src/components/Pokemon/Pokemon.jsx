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
        <div className="titleContainer">
          <p className="pokemonTitle">{pokemonName}</p>
        </div>
        {/* <p>{pokeId}</p> */}
        <div className="imgContainer">
          <img className="imgPokemon" src={sprite} alt="no sprite" />
        </div>
        <div className="deleteContainer">
          <button
            className="btnDelete"
            onClick={(e) => {
              e.preventDefault();
              dispatch(deletePokemon(userId, pokeId));
            }}
          >
            liberar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
