//imports
import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import GlobalSearchPage from "../GlobalSearchPage/GlobalSearchPage";
import WordPage from "../WordPage/WordPage";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/about will show the about page. */}

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <Route exact path="/globalsearch">
            <GlobalSearchPage />
          </Route>
          <ProtectedRoute exact path="/word/:id">
            <WordPage />
          </ProtectedRoute>

          {/* <ProtectedRoute
            // logged in shows FavoritesPage else shows LoginPage
            exact
            path="/favorites"
          >
            <FavoritesPage />
          </ProtectedRoute> */}

          <ProtectedRoute
            // logged in shows FavoritesPage else shows LoginPage
            exact
            path="/favorites"
          >
            <FavoritesPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows GlobalSearchPage else shows LoginPage
            exact
            path="/globalsearch"
          >
            <GlobalSearchPage />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /globalsearch page
              <Redirect to="/globalsearch" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
