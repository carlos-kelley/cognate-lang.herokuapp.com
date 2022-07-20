import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useHistory } from "react-router-dom";
import FavoritesSearch from "../FavoritesSearch/FavoritesSearch";

function FavoritesPage() {
  const navToWord = () => {
    history.push("/word");
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const favorites = useSelector(
    (store) => store.favorites
  );
  //if i pull all the words can i map them with a filter?
  //fetch words on mount -
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
    console.log(event.currentTarget);
    console.log("favs", favorites);
  }, []);
  return (
    <div className="container">
      {favorites.length === 0 ? (
        <p>loading...</p>
      ) : (
        <div>
          <div className="favoritesDiv">
            <h1>Favorites Page</h1>
            {/* <FavoritesSearch /> */}
          </div>
          <section className="favoritesSection">
            {/* loop through our favorites and display them */}
            {favorites.map((favorite) => {
              return (
                <div
                  // duplicate keys

                  key={favorite.id}
                >
                  {/* display the favorite in english */}
                  {/* help */}
                  <h3 onClick={navToWord}>
                    {favorite.english},
                    {favorite.french},
                    {favorite.italian},
                    {favorite.spanish},
                    {favorite.portuguese}
                  </h3>
                  {/* render a delete button */}
                  <button
                    className="btn btn_sizeSm"
                    onClick={() => {
                      dispatch({
                        type: "DELETE_FAVORITE",
                        payload: favorite.id, //i think this is wrong
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
      )}
    </div>
  );
}

export default FavoritesPage;
