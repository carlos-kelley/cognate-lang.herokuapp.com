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

  useEffect(() => {
    //action.payload at end of url
  }, []);
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Global Search"
        onChange={(event) => {
          // dispatch({
          //   type: "SET_GLOBAL_SEARCH",
          //   payload: event.target.value,
          // });
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
