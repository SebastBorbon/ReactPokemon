import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import "./searchBar.css";

const SearchBar = ({ onSearch }) => {
  const [pokemon, setPokemon] = useState("");
  // const dispatch = useDispatch();

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
    </div>
  );
};

export default SearchBar;
