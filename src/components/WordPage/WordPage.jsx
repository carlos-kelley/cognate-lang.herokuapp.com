import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useHistory } from "react-router-dom";
import GlobalSearch from "../GlobalSearchPage/GlobalSearchPage";
import { useParams } from "react-router-dom";

function WordPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const thisWord = useSelector(
    (store) => store.thisWord
  );

  //to use the id and word from the url
  const params = useParams();
  const wordID = params.id;

  const [word, setWord] = useState(null);
  //if i pull all the words can i map them with a filter?

  useEffect(() => {
    //set and display current word id from params
    setWord(wordID);
    //send word id to saga to get word
    dispatch({
      type: "FETCH_THIS_WORD",
      payload: Number(wordID),
    });
  }, []);

  return (
    <div className="container">
      <h1>Words Page</h1>
      <GlobalSearch />
      {JSON.stringify({ thisWord })}
    </div>
  );
}

export default WordPage;
