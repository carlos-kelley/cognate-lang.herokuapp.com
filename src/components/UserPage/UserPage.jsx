import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import SearchPageButton from '../SearchPageButton/SearchPageButton';
import FavoritesPageButton from '../FavoritesPageButton/FavoritePageButton';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
      const history = useHistory();

  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <SearchPageButton />
      <FavoritesPageButton />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
