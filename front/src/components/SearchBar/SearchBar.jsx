import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./searchBar.css";

const SearchBar = ({ onSearch }) => {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");

  // useEffect(
  //   () => {
  //     pokemonName.map((pokemon) => {
  //       console.log(pokemon.name);
  //     });
  //     dispatch(pokemonSearch(userId, search));
  //   },
  //   [pokemonName, search]
  // );

  return (
    <div id="cover">
      <form
        method="get"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(pokemon);
        }}
      >
        <div className="tb">
          <div className="td">
            <input
              id="search"
              type="text"
              placeholder="Search Pokemon"
              value={pokemon}
              onChange={(e) => setPokemon(e.target.value)}
              required
            />
          </div>
          <div className="td" id="s-cover">
            <button className="btnSearch" type="submit" value="Buscar">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
      {/* <button type="submit" className="addBtn">
        Deberia anadir todos
      </button> */}
    </div>
  );
};

export default SearchBar;
