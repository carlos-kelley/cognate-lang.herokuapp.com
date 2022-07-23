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
import GlobalSearchPage from "../GlobalSearchPage/GlobalSearchPage";
import { useParams } from "react-router-dom";
import "./WordPage.css";
import {
  Route,
  useLocation,
  Link,
} from "react-router-dom";

function WordPage() {
  //import variables and stores
  const dispatch = useDispatch();
  const history = useHistory();
  const thisWord = useSelector(
    (store) => store.thisWord
  );
  const location = useLocation();

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
    <div className="containerWordPage">
      <div className="wordSearchContainer">
        <GlobalSearchPage />
      </div>
      {/* map through thisWord array */}
      {thisWord.map((word) => {
        return (
          <div className="searchResults" key={word.id}>
            <h3 className="englishWord">{word.english}</h3>
            <h3 className="frenchWord">{word.french}</h3>
            <h3 className="spanishWord">{word.spanish}</h3>
            <h3 className="italianWord">{word.italian}</h3>
            <h3 className="portugueseWord">{word.portuguese}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default WordPage;
