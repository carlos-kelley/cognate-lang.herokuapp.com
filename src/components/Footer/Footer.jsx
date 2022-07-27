import React from "react";
import "./Footer.css";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  const user = useSelector((store) => store.user);

  return (
    // <div className="footerContainer">
    <footer>
      <div className="footerContainer">
        {!user.id && (
          <p>
            Carlos Kelley &copy; 2022. All Rights
            Reserved.
          </p>
        )}
        {user.id && (
          <p>
            Carlos Kelley &copy; 2022. All Rights
            Reserved.
            <LogOutButton className="navLink" />
          </p>
        )}
      </div>
    </footer>
    // </div>
  );
}

export default Footer;
