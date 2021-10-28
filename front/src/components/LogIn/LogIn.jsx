import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LogIn.scss";
// import { login } from "../../redux/actions/index";
import { logIn } from "../../redux/actions/sending";

const LogIn = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;
  const dispatch = useDispatch();
  // const selectInputs = useSelector((state) => state.username);

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
