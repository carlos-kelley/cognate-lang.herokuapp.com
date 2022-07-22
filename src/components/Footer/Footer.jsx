import React from "react";
import "./Footer.css";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useLocation } from "react-router-dom";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  const location = useLocation();
  return (
    <div>
      {JSON.stringify(location.pathname)}
      <footer>
        {location.pathname === "/login" ? (
          <p>
            Carlos Kelley &copy; 2022. All Rights
            Reserved.
          </p>
        ) : location.pathname ===
          "/registration" ? (
          <p>
            Carlos Kelley &copy; 2022. All Rights
            Reserved.
          </p>
        ) : (
          <p>
            Carlos Kelley &copy; 2022. All Rights
            Reserved.
            <LogOutButton className="navLink" />
          </p>
        )}
      </footer>
    </div>
  );
}

export default Footer;
