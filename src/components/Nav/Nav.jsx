import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const location = useLocation();
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      {user.id &&
        location.pathname === "/globalsearch" && (
          <>
            <div className="navLogoContainer">
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
        )}

      {user.id &&
        location.pathname ===
          "/favorites" && (
            <>
              <div className="navLogoContainer">
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
          )}
      {
        /*if user.id is true and */
        user.id &&
          location.pathname.indexOf("/word/") ===
            0 && (
              <>
                <div className="navLogoContainer">
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
            )
      }
      {!user.id && (
        <>
          <Link to="/login">
            <img
              src="/images/Cognate_Logo.png"
              className="navLogo"
            />
          </Link>
        </>
      )}
    </div>
  );
}

export default Nav;
