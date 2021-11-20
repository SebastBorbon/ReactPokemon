import "./components/LogIn/LogIn";
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import { Route } from "react-router-dom";
import React from "react";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/teams" component={Teams} />
      <Route exact path="/signup" component={SignUp} />
    </>
  );
}

export default App;
