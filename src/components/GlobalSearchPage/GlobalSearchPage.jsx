import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useHistory } from "react-router-dom";
import AddFavoriteButton from "../AddFavoriteButton/AddFavoriteButton";

function GlobalSearchPage() {
  const navToWord = () => {
    // history.push("/word/");
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const globalSearch = useSelector(
    (store) => store.globalSearch
  );

  useEffect(() => {}, []);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Global Search"
        onChange={(event) => {
          dispatch({
            type: "SET_GLOBAL_SEARCH",
            payload: event.target.value,
          });
          dispatch({
            type: "FETCH_WORDS",
            payload: event.target.value,
          });
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
      <div className="globalSearchDiv">
        <h1>Global Search Page</h1>
        <section className="globalSearchSection">
          {/* loop through our globalSearch and display them */}
          {globalSearch.map((word) => {
            return (
              <div
                // duplicate keys
                key={word.id}
              >
                {/* display the words in globalSearch array */}
                <h3
                  onClick={() =>
                    // history.push(
                    //   `/api/words?word=${word.english}`
                    // )
                    //dispatch a SET_ID action to set the id to the word.id
                    dispatch({ 
                      type: "SET_ID",
                      payload: word.id,
                    })
              
                  }
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
      </div>
    </div>
  );
}

{
  /* create a button that console logs globalSearch */
}
<button
  onClick={() => {
    console.log("global:", globalSearch);
  }}
>
  Log Global Search
</button>;
//ignore this comment please

export default GlobalSearchPage;
