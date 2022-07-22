import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="nav">
      {location.pathname === "/globalsearch" ? (
        <>
          <div class="navLogoContainer">
            <Link to="/login">
              <img
                src="/images/Cognate_Logo.png"
                className="navLogo"
              />
            </Link>
          </div>
          <ul className="navList">
            <li>
              <Link to="/favorites">
                <img
                  src="/images/favorite.png"
                  className="navFav"
                />
              </Link>
            </li>
          </ul>
        </>
      ) : location.pathname === "/favorites" ? (
        <>
          <div class="navLogoContainer">
            <Link to="/login">
              <img
                src="/images/Cognate_Logo.png"
                className="navLogo"
              />
            </Link>
          </div>
          <ul className="navList">
            <li></li>
            <li>
              <Link to="/globalsearch">
                <img
                  src="/images/search.png"
                  className="navSearch"
                />
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <div class="navLogoContainer">
            <Link to="/login">
              <img
                src="/images/Cognate_Logo.png"
                className="navLogo"
              />
            </Link>
          </div>
          <ul className="navList">
            <li>
              <Link to="/favorites">
                <img
                  src="/images/favorite.png"
                  className="navFav"
                />
              </Link>
            </li>
            <li>
              <Link to="/globalsearch">
                <img
                  src="/images/search.png"
                  className="navSearch"
                />
              </Link>
            </li>
          </ul>
        </>
      )}

      {/* <div> */}
      {/* If no user is logged in, show these links */}
      {/* {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )} */}
      {/* <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button> */}

      {/* If a user is logged in, show these links */}
      {/* {user.id && ( */}
      <>
        {/* <Link className="navLink" to="/user">
              Home
            </Link> */}

        {/* <LogOutButton className="navLink" /> */}
      </>
      {/* )} */}

      {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      {/* </div> */}
    </div>
  );
}

export default Nav;
