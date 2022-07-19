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

function WordPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const words = useSelector(
    (store) => store.words
  );
  //if i pull all the words can i map them with a filter?
  //fetch words on mount
  useEffect(() => {
    dispatch({ type: "FETCH_WORDS" });
    console.log(event.currentTarget);
    console.log("words", words);
  }, []);
  return (
    <div className="container">
      <h1>Words Page</h1>
      
    </div>
  );
}

export default WordPage;
