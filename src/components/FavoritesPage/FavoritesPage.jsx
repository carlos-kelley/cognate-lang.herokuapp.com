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
  //if i pull all the words can i map them with a filter?
  //fetch words on mount
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
    console.log(event.currentTarget);
    console.log("favs", favorites);
  }, []);
  return (
    <div className="container">
      <h1>Favorites Page</h1>
      <section className="favorites">
        {/* loop through our favorites and display them */}
        {favorites.map((favorite, index) => {
          return (
            <div
              // duplicate keys
              id={index}
              key={index}
            >
              {/* display the favorite in english */}
              <h3>
                {favorite.english},{" "}
                {favorite.french},{" "}
                {favorite.italian},{" "}
                {favorite.spanish},{" "}
                {favorite.portuguese}
              </h3>
              {/* render a delete button */}
              <button
                className="btn btn_sizeSm"
                onClick={() => {
                  dispatch({
                    type: "DELETE_FAVORITE",
                    payload: favorite.id,
                  });
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default FavoritesPage;
