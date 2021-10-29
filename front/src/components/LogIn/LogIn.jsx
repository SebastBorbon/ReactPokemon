import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LogIn.scss";
import { logIn } from "../../redux/actions/sending";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;
  const dispatch = useDispatch();
  //ADD VALIDATION TOKEN
  const loged = useSelector((state) => state.user.userId);
  const history = useHistory();

  useEffect(() => {
    if (loged) {
      history.push("/teams");
      window.location.reload();
    }
  }, [loged]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  return (
    <div>
      <div>
        <form className="login" onSubmit={handleSubmit}>
          <input
            name="username"
            value={username}
            placeholder="User"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={handleChange}
            required
          />

          <button
            onClick={() => dispatch(logIn(inputs))}
            type="submit"
            className="btnSubmit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
