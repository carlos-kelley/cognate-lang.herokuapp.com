//imports
import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useHistory } from "react-router-dom";


function FavoritesPage() {
  //handle pushing to word page onlick
  const navToWord = () => {
    history.push("/word");
  };

  //declare variables and stores
  const dispatch = useDispatch();
  const history = useHistory();
  const favorites = useSelector(
    (store) => store.favorites
  );
  let favoritesSearch = useSelector(
    (store) => store.favoritesSearch
  );

  //set search hook
  const [search, setSearch] = useState("");

  

  //if i pull all the words can i map them with a filter?

  //fetch words on mount -
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
    console.log(event.currentTarget);
    console.log("favs", favorites);
    console.log("favs search", favoritesSearch);
  }, []);

  return (
    <div className="container">
      <div>
        <div className="favoritesDiv">
          <h1>Favorites</h1>
        </div>

        {/* Search favorites bar, dispatches FETCH_FAVORITES_SEARCH */}
        <input
          type="text"
          placeholder="Search favorites..."
          onChange={(event) => {
            dispatch({
              type: "FETCH_FAVORITES_SEARCH",
              payload: event.target.value,
            });
            setSearch(event.target.value);
          }}
        />

        {/* only render fav list if nothing is in search bar */}
        {search === "" ? (
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
                        payload: favorite.word_id, //i think this is wrong
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </section>
        ) : (
          <section className="favoritesSearchSection">
            {/* loop through our favoritesSearch and display them */}

            {favoritesSearch.map(
              (favoriteSearch) => {
                return (
                  <div
                    // duplicate keys

                    key={favoriteSearch.id}
                  >
                    {/* display the favoriteSearch in english */}
                    {/* help */}
                    <h3 onClick={navToWord}>
                      {favoriteSearch.english},
                      {favoriteSearch.french},
                      {favoriteSearch.italian},
                      {favoriteSearch.spanish},
                      {favoriteSearch.portuguese}
                    </h3>
                    {/* render a delete button */}
                    <button
                      className="btn btn_sizeSm"
                      onClick={() => {
                        dispatch({
                          type: "DELETE_FAVORITE",
                          payload:
                            favoriteSearch.id, //i think this is wrong maybet
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              }
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
