import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useHistory } from "react-router-dom";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function FavoritesPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const favorites = useSelector(
    (store) => store.favorites
  );

  //fetch words on mount
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
    console.log(event.currentTarget);
    console.log("favs", favorites);
  }, []);
  return (
    <div className="container">
      <p>Favorites Page</p>
    </div>
  );
}

export default FavoritesPage;
