import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from "../../redux/actions/sending";
import "./SignUp.scss";
import pokefondo from "../../public/pokefondo.png";

const SignUp = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.userId);
  const history = useHistory();

  useEffect(() => {
    if (logged) {
      history.push("/teams");
      window.location.reload();
    }
  }, [logged, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    dispatch(signUp(data));
  };

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
        <form className="signUp" onSubmit={(e) => handleSubmit(e)}>
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
          <button type="submit" className="btnSubmit">
            Sign Up
          </button>
        </form>
        <div className="pokemon">
          <img src={pokefondo} className="pokefondo" />
        </div>
        <div className="Sebas">
          <h1 class="ByMe">By Sebastian Borbon</h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;