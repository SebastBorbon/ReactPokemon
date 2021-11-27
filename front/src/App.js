import "./components/LogIn/LogIn";
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import React from "react";
import Teams from "./components/Teams/Teams";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/teams" component={Teams} />
    </>
  );
}

export default App;
