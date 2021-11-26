import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import "./searchBar.css";

const SearchBar = ({ onSearch }) => {
  const [pokemon, setPokemon] = useState("");
  // const dispatch = useDispatch();

  return (
    <div className="SearchBarContainer">
      <form
        className="formSearchBar"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(pokemon);
        }}
      >
        <div className="onlyInputs">
          <input
            className="inputSearch"
            type="text"
            placeholder="Search Pokemon..."
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
            required
          />
          <span className="btnContainer">
            <input className="btnSearch" type="submit" value="Search" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
