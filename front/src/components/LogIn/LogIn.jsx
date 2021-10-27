import React, { useDispatch, useEffect, useState } from "react";
import "./LogIn.scss";

const LogIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <form className="login" onSubmit="submit">
          <input
            name="user"
            value={user}
            placeholder="User"
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <input
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btnSubmit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
