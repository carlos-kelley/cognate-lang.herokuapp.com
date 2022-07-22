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
import AddFavoriteButton from "../AddFavoriteButton/AddFavoriteButton";
import "./GlobalSearchPage.css";

function GlobalSearchPage() {
  //handle pushing to word page onclick
  const navToWord = () => {
    // history.push("/word/");
  };

  //declare variables and stores
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");
  let globalSearch = useSelector(
    (store) => store.globalSearch
  );
  let id = useSelector((store) => store.id);
  const location = useLocation();

  //useEffect
  useEffect(() => {}, []);

  return (
    <div className="container">
      {location.pathname === "/globalsearch" ? (
        <div>
          {" "}
          <h2>Welcome!</h2>
          <p className="welcomeText">
            Search a word in English, French,
            Spanish, Italian, or Portuguese to see
            its cognates. Or, find a random word.
          </p>
        </div>
      ) : (
        <></>
      )}

      {/* <button
        onClick={() => {
          console.log("global:", globalSearch);
          console.log("id: ", id);
        }}
      >
        Log Global Search and ID
      </button>
      ; */}
      <div className="searchContainer">
        <label>
          <input
            className="searchField"
            type="text"
            placeholder="Search word..."
            onChange={(event) => {
              // dispatch({
              //   type: "SET_GLOBAL_SEARCH",
              //   payload: event.target.value,
              // });
              dispatch({
                type: "FETCH_WORDS",
                payload: event.target.value,
              });
              setSearch(event.target.value);
              // dispatch({
              //   type: "CLEAR_ID",
              // });

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

      {/* random word button */}
      <button className="randomSearch">
        Random Word
      </button>

      <div className="globalSearchDiv">
        {search !== "" ? (
        <section className="globalSearchSection">
          {/* loop through our globalSearch and display them */}

          {globalSearch.map((word) => {
            dispatch({
              type: "SET_ID",
              payload: word.id,
            }); //this needs to happen for each INDIVIDUAL word
            return (
              <div>
                {/* display the words in globalSearch array */}
                <h3
                // onChangText={() =>
                //   // history.push(
                //   //   `/api/words?word=${word.english}`
                //   // )
                //   //dispatch a SET_ID action to set the id to the word.id

                // }
                >
                  {word.english},{word.french},
                  {word.italian},{word.spanish},
                  {word.portuguese}, {word.id}
                </h3>
                <AddFavoriteButton />
              </div>
            );
          })}
          </section>
        ) : (
            <></>
          )}
      </div>
    </div>
  );
}

export default GlobalSearchPage;
