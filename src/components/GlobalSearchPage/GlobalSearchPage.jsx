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

function GlobalSearchPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const globalSearch = useSelector(
    (store) => store.globalSearch
  );

  //fetch words on mount
  useEffect(() => {
    dispatch({ type: "FETCH_WORDS" });
    console.log(event.currentTarget);
    console.log("global", globalSearch);
  }, []);
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
        }}
      />
      {/* create a button that console logs globalSearch */}
      <button
        onClick={() => {
          console.log("global:", globalSearch);
        }}
      >
        Log Global Search
      </button>
    </div>
  );
}

export default GlobalSearchPage;
