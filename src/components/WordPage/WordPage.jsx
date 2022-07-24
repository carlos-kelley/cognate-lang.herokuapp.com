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
import { useLocation } from "react-router-dom";
import AddFavoriteWordPage from "../AddFavoriteWordPage/AddFavoriteWordPage";

function WordPage() {
  //console log toggleEnlish on mount
  useEffect(() => {
    console.log(
      "refreshing",
      "toggleEnglish: ",
      toggleEnglish,
      "toggleFrench: ",
      toggleFrench,
      "toggleSpanish: ",
      toggleSpanish,
      "toggleItalian: ",
      toggleItalian,
      "togglePortuguese: ",
      togglePortuguese
    );
  });

  //import variables and stores
  const dispatch = useDispatch();
  const thisWord = useSelector(
    (store) => store.thisWord
  );

  //to use the id and word from the url
  const params = useParams();
  const wordID = params.id;
  const toggleEnglish = useSelector(
    (store) => store.toggleEnglish
  );
  const toggleFrench = useSelector(
    (store) => store.toggleFrench
  );
  const toggleSpanish = useSelector(
    (store) => store.toggleSpanish
  );
  const toggleItalian = useSelector(
    (store) => store.toggleItalian
  );
  const togglePortuguese = useSelector(
    (store) => store.togglePortuguese
  );

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

  const handleForvoEnglish = (action) => {
    console.log("in forvo english");
    //send word to saga to get forvo audio
    dispatch({
      type: "FETCH_FORVO_ENGLISH",
      payload: word.english,
    });
    console.log(
      "action.payload in forvo eng: ",
      action.payload
    );
  };

  const handleForvoFrench = (action) => {
    //send word to saga to get forvo audio
    dispatch({
      type: "FETCH_FORVO_FRENCH",
      payload: word.french,
    });
  };

  const handleForvoSpanish = (action) => {
    //send word to saga to get forvo audio
    dispatch({
      type: "FETCH_FORVO_SPANISH",
      payload: word.spanish,
    });
  };

  const handleForvoItalian = (action) => {
    //send word to saga to get forvo audio
    dispatch({
      type: "FETCH_FORVO_ITALIAN",
      payload: word.italian,
    });
  };

  const handleForvoPortuguese = (action) => {
    //send word to saga to get forvo audio
    dispatch({
      type: "FETCH_FORVO_PORTUGUESE",
      payload: word.portuguese,
    });
  };

  return (
    <div className="containerWordPage">
      <div className="wordSearchContainer">
        <GlobalSearchPage />
      </div>
      {/* map through thisWord array */}

      {thisWord.map((word) => {
        return (
          <div
            className="searchResults"
            key={word.id}
          >
            {toggleEnglish && (
              <h3
                className="englishWord"
                onClick={() => {
                  handleForvoEnglish({
                    payload: word.english,
                  });
                }}
              >
                {word.english}
              </h3>
            )}
            {toggleFrench && (
              <h3
                className="frenchWord"
                onClick={handleForvoFrench}
              >
                {word.french}
              </h3>
            )}
            {toggleSpanish && (
              <h3
                className="spanishWord"
                onClick={handleForvoSpanish}
              >
                {word.spanish}
              </h3>
            )}
            {toggleItalian && (
              <h3
                className="italianWord"
                onClick={handleForvoItalian}
              >
                {word.italian}
              </h3>
            )}
            {togglePortuguese && (
              <h3
                className="portugueseWord"
                onClick={handleForvoPortuguese}
              >
                {word.portuguese}
              </h3>
            )}
          </div>
        );
      })}
      <div>
        <AddFavoriteWordPage />
      </div>
    </div>
  );
}

export default WordPage;
