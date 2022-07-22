import React, { useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(
    (store) => store.errors
  );
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
        role: 0,
      },
    });
  }; // end registerUser

  return (
    <form
      className="formPanel"
      onSubmit={registerUser}
    >
      <h2>Create Account</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          
          <input
          placeholder = "Username"
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) =>
              setUsername(event.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          
          <input
          placeholder = "Password"
            type="password"
            name="password"
            value={password}
            required
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
          value="Submit"
        />
      </div>
    </form>
  );
}

export default RegisterForm;
