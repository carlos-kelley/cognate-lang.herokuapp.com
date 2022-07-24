//imports
import React, {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router-dom";

import AddFavoriteButtonSearchResult from "../AddFavoriteButtonSearchResult/AddFavoriteButtonSearchResult";

import LanguageTogglesButton from "../LanguageTogglesButton/LanguageTogglesButton";

import "./GlobalSearchPage.css";

function GlobalSearchPage() {
  //handle pushing to word page onclick

  //declare variables and stores
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState(""); //!!!
  const [random, setRandom] = useState(random);

  let globalSearch = useSelector(
    (store) => store.globalSearch
  );

  let id = useSelector((store) => store.id); //!!!
  const location = useLocation();
  let user = useSelector((store) => store.user);

  //useEffect
  useEffect(() => {
    console.log("random: ", random);
    setRandom(randomNumberInRange(3, 352));
  }, []);

  const randomNumberInRange = (min, max) => {
    console.log("in randomNumberInRange: ");
    return (
      Math.floor(
        Math.random() * (max - min + 1)
      ) + min
    );
  };

  const handleRandom = () => {
    console.log("in handleRandom: ");
    setRandom(randomNumberInRange(3, 352));
    console.log("random becomes: ", random);
    //if random is not null or 0 push to the word page of the random number
    if (random !== null && random !== 0) {
      history.push(`/word/${random}`);
    }
  };

  return (
    <div className="container">
      {location.pathname === "/globalsearch" ? (
        <div>
          {" "}
          <h2>Welcome, {user.username}!</h2>
          <p className="welcomeText">
            Search a word in English, French,
            Spanish, Italian, or Portuguese to see
            its cognates. Or, find a random word.
          </p>
        </div>
      ) : (
        <></>
      )}

      <div className="searchContainer">
        <label>
          <input
            className="searchField"
            type="text"
            placeholder="Search word..."
            onChange={(event) => {
              dispatch({
                type: "FETCH_WORDS",
                payload: event.target.value,
              });
              setSearch(event.target.value);

              console.log("IDs: ", { id });

              console.log(
                "event.target.value: ",
                event.target.value
              );
              console.log(
                "globalSearch: ",
                globalSearch
              );
            }}
          />
        </label>
      </div>
      <LanguageTogglesButton />

      <div className="globalSearchDiv">
        {search !== "" ? (
          <section className="globalSearchSection">
            {/* loop through our globalSearch and display them */}

            {globalSearch.map((word) => {
              return (
                <div
                  className="resultContainer"
                  key={word.id}
                >
                  {/* display the words in globalSearch array */}
                  <h3
                    onClick={() =>
                      history.push(
                        `/word/${word.id}`
                      )
                    }
                    className="searchResult"
                  >
                    {word.english},&nbsp;
                    {word.french},&nbsp;
                    {word.italian},&nbsp;
                    {word.spanish},&nbsp;
                    {word.portuguese}
                  </h3>
                  <AddFavoriteButtonSearchResult />
                </div>
              );
            })}
          </section>
        ) : (
          <></>
        )}
      </div>

      {/* random word button */}
      {location.pathname === "/globalsearch" ? (
        <>
          <button
            onClick={handleRandom}
            className="randomSearch"
          >
            Random Word
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default GlobalSearchPage;
