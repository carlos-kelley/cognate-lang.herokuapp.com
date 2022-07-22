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
  let globalSearch = useSelector(
    (store) => store.globalSearch
  );
  let id = useSelector(
    (store) => store.id
  );

  useEffect(() => {}, []);

  return (
    <div className="container">
      <button
        onClick={() => {
          console.log("global:", globalSearch);
          console.log("id: ", id);
        }}
      >
        Log Global Search and ID
      </button>
      ;
      <input
        type="text"
        placeholder="Global Search"
        onTextChange={(event) => {

          dispatch({
            type: "SET_GLOBAL_SEARCH",
            payload: event.target.value,
          });
          dispatch({
            type: "FETCH_WORDS",
            payload: event.target.value,
          });
          dispatch({
            type: "CLEAR_ID",
          });


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
      <div className="globalSearchDiv">
        <h1>Global Search Page</h1>
        <section className="globalSearchSection">
          {/* loop through our globalSearch and display them */}
          {globalSearch.map((word) => {
            dispatch({
              type: "SET_ID",
              payload: word.id,
            }); //this needs to happen for each INDIVIDUAL word
            return (
              <div
                // duplicate keys
                key={word.id}
              >
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
      </div>
    </div>
  );
}

{
  /* create a button that console logs globalSearch */
}

//ignore this comment please

export default GlobalSearchPage;
