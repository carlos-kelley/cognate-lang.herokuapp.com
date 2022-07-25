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
  const forvoEnglish = useSelector(
    (store) => store.forvoEnglish
  );
  const forvoFrench = useSelector(
    (store) => store.forvoFrench
  );
  const forvoSpanish = useSelector(
    (store) => store.forvoSpanish
  );
  const forvoItalian = useSelector(
    (store) => store.forvoItalian
  );
  const forvoPortuguese = useSelector(
    (store) => store.forvoPortuguese
  );

  const startEnglish = () => {
    console.log(
      "in starteng, forvo path is: ",
      forvoEnglish
    );
    const audio = new Audio(
      forvoEnglish.items[0].pathmp3
    );
    audio.play();
  };
  const startFrench = () => {
    console.log(
      "in startfr, forvo path is: ",
      forvoFrench
    );
    const audio = new Audio(
      forvoFrench.items[0].pathmp3
    );
    audio.play();
  };
  const startSpanish = () => {
    console.log(
      "in startsp, forvo path is: ",
      forvoSpanish
    );
    const audio = new Audio(
      forvoSpanish.items[0].pathmp3
    );
    audio.play();
  };
  const startItalian = () => {
    console.log(
      "in startit, forvo path is: ",
      forvoItalian
    );
    const audio = new Audio(
      forvoItalian.items[0].pathmp3
    );
    audio.play();
  };
  const startPortuguese = () => {
    console.log(
      "in startpo, forvo path is: ",
      forvoPortuguese.items[0].pathmp3
    );
    const audio = new Audio(
      forvoPortuguese.items[0].pathmp3
    );
    audio.play();
  };

  const [word, setWord] = useState(null);
  // const [audioPath, setAudioPath] = useState(null);
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

  // const handleForvoEnglish = (action) => {
  //   console.log("in forvo english");
  //   //send word to saga to get forvo audio
  //   dispatch({
  //     type: "FETCH_FORVO_ENGLISH",
  //     payload: word.english,
  //   });
  //   console.log(
  //     "action.payload in forvo eng: ",
  //     action.payload
  //   );
  // };

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
                  dispatch({
                    type: "FETCH_FORVO_ENGLISH",
                    payload: word.english,
                  });
                  console.log(
                    "action.payload in forvo eng: ",
                    word.english
                  );
                  startEnglish();
                  // console.log ("forvo in func is: ", forvo);
                  // const audio = new Audio(
                  //   forvo.items[0].pathmp3
                  // );
                  // audio.play();
                }}
              >
                {word.english}
              </h3>
            )}
            {toggleFrench && (
              <h3
                className="frenchWord"
                onClick={() => {
                  //create regex to remove "l'"" and "la " and "le " from word.french
                  const regex = /(^l'|^le |^la )/gi;
                   const newFrench =
                     word.french.replace(
                       regex,
                       ""
                     );
                  //use last regex and remove anything inside parentheses from newFrench
                  const regex2 = /\((.*?)\)/gi;
                  const newFrench2 =
                    newFrench.replace(
                      regex2,
                      ""
                    );
                  console.log("newFrench2 is: ", newFrench2);
                 
                  console.log("new french is: ", newFrench);
                  // const regex = /\(([^)]+)\)/;
                  // const regexResult = regex.exec(word.french);
                  // console.log( "regexResult is: ", regexResult);
                }}
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
        {/* <button
          onClick={() => {
            console.log(
              "forvo is: ",
              forvo.items[0].pathmp3
            );
            const audio = new Audio(forvo.items[0].pathmp3);
           
              audio.play();
            
          }}
        >
          show forvo
        </button> */}
        <AddFavoriteWordPage />
      </div>
    </div>
  );
}

export default WordPage;
