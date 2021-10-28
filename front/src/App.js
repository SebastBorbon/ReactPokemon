import "./components/LogIn/LogIn";
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import { Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Route exact path="/auth/login" component={LogIn} />
    </>
  );
}

export default App;
