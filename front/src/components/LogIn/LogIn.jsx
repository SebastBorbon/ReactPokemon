import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LogIn.scss";
import { logIn, signUp } from "../../redux/actions/sending";
import { useHistory } from "react-router";
import pokefondo from "../../images/pokefondo.png";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}
const LogIn = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //used for mantain the session active
  let userId = window.localStorage.getItem("userId");
  const logged = useSelector((state) => state.user.userId);
  const history = useHistory();
  //redirect when the user connects and redirect when the user is already connect
  useEffect(() => {
    if (logged) {
      history.push("/teams");
      window.location.reload();
    }
    if (userId) {
      history.push("/teams");
      window.location.reload();
    }
  }, [dispatch, email, password, logged, history, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //validations for data
  const validateUser = (email) => {
    if (!/\S+@\S+\.\S+/.test(email) && !error) {
      setError("User needs to be an email");
    } else {
      setError("");
    }
    setEmail(email);
  };

  const validatePassword = (password) => {
    if (password.length <= 3) {
      setError("Add a valid password");
    } else {
      setError("");
    }
    setPassword(password);
  };

  const sendlogIn = (e) => {
    if (!password && !email) {
      toast.dark("ey type an user!");
    } else if (!email) {
      toast.dark("u need  an email!");
    } else if (!password) {
      toast.dark("u need a password!");
    } else if (error) {
      toast.dark(error);
    } else {
      e.preventDefault();
      dispatch(logIn(email, password));
    }
  };

  const sendSignUp = (e) => {
    if (!password && !email) {
      toast.dark("ey type an user!");
    } else if (!email) {
      toast.dark("u need  an email!");
    } else if (!password) {
      toast.dark("u need a password!");
    } else if (error) {
      toast.dark(error);
    } else {
      e.preventDefault();
      dispatch(signUp(email, password));
    }
  };

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
          <input
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={(e) => validatePassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btnSubmit"
            onClick={(e) => {
              sendlogIn(e);
            }}
          >
            Login
          </button>
          <button
            type="submit"
            className="btnSubmit"
            id="signUp"
            onClick={(e) => {
              sendSignUp(e);
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
      <ToastContainer />
    </div>
  );
};

export default LogIn;
