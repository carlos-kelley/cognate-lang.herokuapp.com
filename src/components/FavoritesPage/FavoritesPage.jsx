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
  //handle pushing to word page onclick
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
  

  //fetch words on mount -
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
    console.log(event.currentTarget);
    console.log("favs", favorites);
    console.log("favs search", favoritesSearch);
  }, []);

  const seeID = (id) => {
    console.log("in seeID: ");
    console.log("id: ", id);
    history.push(`/word/${id}`);

  }

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
                <div>
                  {/* display the favorite in all its languages */}
                  <h3 onClick={() =>
                   history.push(`/word/${favorite.word_id}`)} >
                    {favorite.english},
                    {favorite.french},
                    {favorite.italian},
                    {favorite.spanish},
                    {favorite.portuguese}
                    {favorite.word_id}
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
          //if there is a search term, render the filtered list
          <section className="favoritesSearchSection">
            {/* loop through our favoritesSearch and display them */}
            {favoritesSearch.map(
              (favoriteSearch) => {
                return (
                  <div key={favoriteSearch.id}>
                    {/* display the favoriteSearch in all its languages */}
                    <h3 onClick={navToWord}>
                      {favoriteSearch.english},
                      {favoriteSearch.french},
                      {favoriteSearch.italian},
                      {favoriteSearch.spanish},
                      {favoriteSearch.portuguese},
                      {favoriteSearch.id}
                    </h3>
                    {/* render a delete button */}
                    <button
                      className="btn btn_sizeSm"
                      onClick={() => {
                        dispatch({
                          type: "DELETE_FAVORITE",
                          payload:
                            favoriteSearch.id,
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
