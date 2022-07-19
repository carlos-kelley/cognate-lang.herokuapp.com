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
  //fetch words on mount
  useEffect(() => {
    dispatch({ type: "FETCH_WORDS" });
    console.log(event.currentTarget);
  }, []);
  return (
    <div className="container">
      <p>Global Search Page</p>
      <input
        type="text"
        placeholder="Global Search"
      />
    </div>
  );
}

export default GlobalSearchPage;
