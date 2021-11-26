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
        <div className="deleteContainer">
          <button
            className="btnDelete"
            onClick={(e) => {
              e.preventDefault();
              dispatch(deletePokemon(userId, pokeId));
            }}
          >
            X
          </button>
        </div>
        <div className="titleContainer">
          <p>{pokemonName}</p>
        </div>
        {/* <p>{pokeId}</p> */}
        <div className="imgContainer">
          <img className="imgPokemon" src={sprite} alt="no sprite" />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
