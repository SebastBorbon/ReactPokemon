import "./components/LogIn/LogIn";
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import { Route } from "react-router-dom";
import React from "react";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <>
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/teams" component={Teams} />
    </>
  );
}

export default App;
