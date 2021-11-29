import "./SearchPk.css";
import { pokemonAdd } from "../../redux/actions/sending";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const SearchPk = ({ pokemonName, pokeId, sprite }) => {
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");
  const teamPokemons = useSelector((state) => state.team.team);

  const pokemonExist = (pokeId) => {
    let exist = teamPokemons.findIndex((team) => team.pokeId === pokeId);
    return exist === -1 ? false : true;
  };

  const renderPokemons = (e) => {
    if (!pokemonExist(pokeId)) {
      if (teamPokemons.length === 6) {
        toast.dark("already have  6 pokemons");
      } else {
        e.preventDefault();
        dispatch(pokemonAdd(userId, pokemonName));
      }
    } else {
      toast.dark("this pokemon  is already in the team");
    }
  };

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
        <button className="addPokemonBtn" onClick={(e) => renderPokemons(e)}>
          Catch!
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SearchPk;
