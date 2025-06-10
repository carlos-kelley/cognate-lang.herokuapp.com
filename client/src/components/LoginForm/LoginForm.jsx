import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(
    (store) => store.errors
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}

      <div className="loginPanel">
        <label htmlFor="username">
          <input
            placeholder="Username"
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <input
            placeholder="Password"
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />
        </label>
      </div>
      <div>
        <input
          className="btn"
          type="submit"
          name="submit"
          value="Login"
        />
      </div>
      <button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push("/registration");
        }}
      >
        Create account
      </button>
    </form>
  );
}

export default LoginForm;
