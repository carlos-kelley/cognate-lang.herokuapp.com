//imports
import React, {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router-dom";

function LanguageSelectPage() {
  //handle pushing to word page onclick

  //declare variables and stores
  const dispatch = useDispatch();
  const history = useHistory();

  let id = useSelector((store) => store.id); //!!!
  const location = useLocation();
  let user = useSelector((store) => store.user);

  return (
    <div className="container">
      <div>
        <h2>Welcome, {user.username}!</h2>
        <p className="welcomeText">
          Choose a language!
        </p>
      </div>
    </div>
  );
}

export default LanguageSelectPage;
