import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonSearch } from "../../redux/actions/sending";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");
  // useEffect(() => {
  //   dispatch(pokemonSearch(userId, pokemonName));
  // });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(pokemonSearch(userId, search));
      }}
    >
      <input
        type="text"
        placeholder="buscar pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchBar;
