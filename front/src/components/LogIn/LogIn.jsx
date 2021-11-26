import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LogIn.scss";
import { logIn, signUp } from "../../redux/actions/sending";
import { useHistory } from "react-router";
import pokefondo from "../../images/pokefondo.png";

const LogIn = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //used for mantain the session active
  const logged = useSelector((state) => state.user.userId);
  const history = useHistory();
  //redirect when the user connect
  useEffect(() => {
    if (logged) {
      history.push("/teams");
      window.location.reload();
    }
  }, [logged, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //verify if the user is an email
  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError("User needs to be an email");
    } else {
      setError(" ");
    }
    setEmail(value);
  }

  return (
    <div>
      <div>
        <form className="login" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="username"
            value={email}
            placeholder="User"
            onChange={(e) => validateUser(e.target.value)}
            required
          />
          {!error ? null : <p>{error}</p>}
          <input
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btnSubmit"
            onClick={(e) => {
              e.preventDefault();

              dispatch(logIn(email, password));
            }}
          >
            Login
          </button>
          <button
            type="submit"
            className="btnSubmit"
            id="signUp"
            onClick={(e) => {
              e.preventDefault();
              dispatch(signUp(email, password));
            }}
          >
            Sign Up
          </button>
        </form>
        <div className="pokemon">
          <img src={pokefondo} alt="cant charge img" className="pokefondo" />
        </div>
        <div className="Sebas">
          <h1 className="ByMe">By Sebastian Borbon</h1>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
