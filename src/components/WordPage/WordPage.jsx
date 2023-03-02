//imports
import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

import GlobalSearchPage from "../GlobalSearchPage/GlobalSearchPage";
import { useParams } from "react-router-dom";
import "./WordPage.css";

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
  const history = useHistory();
  const dispatch = useDispatch();
  const thisWord = useSelector(
    (store) => store.thisWord
  );
  const isMountedEnglish = useRef(false);
  const isMountedFrench = useRef(false);
  const isMountedItalian = useRef(false);
  const isMountedSpanish = useRef(false);
  const isMountedPortuguese = useRef(false);

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

  useEffect(() => {
    if (isMountedEnglish.current) {
      console.log(
        "in starteng, forvo path is: ",
        forvoEnglish
      );
      const audio = new Audio(
        forvoEnglish.items[0].pathmp3
      );
      audio.muted = true;
      audio.playsInline = true;
      audio.play();
    } else {
      isMountedEnglish.current = true;
    }
  }, [forvoEnglish]);

  useEffect(() => {
    if (isMountedFrench.current) {
      console.log(
        "in startfr, forvo path is: ",
        forvoFrench
      );
      const audio = new Audio(
        forvoFrench.items[0].pathmp3
      );
      audio.muted = true;
      audio.playsInline = true;
      audio.play();
    } else {
      isMountedFrench.current = true;
    }
  }, [forvoFrench]);

  useEffect(() => {
    if (isMountedSpanish.current) {
      console.log(
        "in startsp, forvo path is: ",
        forvoSpanish
      );
      const audio = new Audio(
        forvoSpanish.items[0].pathmp3
      );
      audio.muted = true;
      audio.playsInline = true;
      audio.play();
    } else {
      isMountedSpanish.current = true;
    }
  }, [forvoSpanish]);

  useEffect(() => {
    if (isMountedItalian.current) {
      console.log(
        "in startit, forvo path is: ",
        forvoItalian
      );
      const audio = new Audio(
        forvoItalian.items[0].pathmp3
      );
      audio.muted = true;
      audio.playsInline = true;
      audio.play();
    } else {
      isMountedItalian.current = true;
    }
  }, [forvoItalian]);

  useEffect(() => {
    if (isMountedPortuguese.current) {
      console.log(
        "in startpo, forvo path is: ",
        forvoPortuguese
      );
      const audio = new Audio(
        forvoPortuguese.items[0].pathmp3
      );
      audio.muted = true;
      audio.playsInline = true;
      audio.play();
    } else {
      isMountedPortuguese.current = true;
    }
  }, [forvoPortuguese]);

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

  // const handleRandom = () => {
  //   console.log("in handleRandom: ");
  //   setRandom(randomNumberInRange(3, 352));
  //   console.log("random becomes: ", random);
  //   //if random is not null or 0 push to the word page of the random number
  //   if (random !== null && random !== 0) {
  //     history.push(`/word/${random}`);
  //   }
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
      <div className="wordSearchContainer withToggle">
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
                  //create regex to remove everything inside parentheses or after a comma
                  const regex =
                    /(, (.*)|\((.*?)\))/g;
                  const newEnglish =
                    word.english.replace(
                      regex,
                      ""
                    );

                  dispatch({
                    type: "FETCH_FORVO_ENGLISH",
                    payload: newEnglish,
                  });
                  console.log(
                    "action.payload in forvo eng: ",
                    word.english
                  );
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
                  const regex =
                    /(^l'|^le |^la )/gi;
                  const newFrench =
                    word.french.replace(
                      regex,
                      ""
                    );
                  console.log(
                    "new french is: ",
                    newFrench
                  );
                  //use last regex and remove anything inside parentheses from newFrench
                  const regex2 = /\((.*?)\)/gi;
                  const newFrench2 =
                    newFrench.replace(regex2, "");
                  console.log(
                    "newFrench2 is: ",
                    newFrench2
                  );
                  //regex to remove anything after a comma from newFrench2
                  const regex3 = /, (.*)/gi;
                  const newFrench3 =
                    newFrench2.replace(
                      regex3,
                      ""
                    );
                  console.log(
                    "newFrench3 is: ",
                    newFrench3
                  );
                  //regex to remove "les " from newFrench3
                  const regex4 = /les /gi;
                  const newFrench4 =
                    newFrench3.replace(
                      regex4,
                      ""
                    );
                  console.log(
                    "newFrench4 is: ",
                    newFrench4
                  );
                  //send word to saga to get forvo audio
                  dispatch({
                    type: "FETCH_FORVO_FRENCH",
                    payload: newFrench4,
                  });
                }}
              >
                {word.french}
              </h3>
            )}
            {/* el la () los las  , */}
            {toggleSpanish && (
              <h3
                className="spanishWord"
                onClick={() => {
                  //create regex to remove "la " and "el " and "los " and "las " and anything after a comma and anything in parentheses from word.spanish
                  const regex =
                    /(^la |^el |^los |^las |, (.*)|\((.*?)\))/gi;
                  const newSpanish =
                    word.spanish.replace(
                      regex,
                      ""
                    );
                  console.log(
                    "new Spanish is: ",
                    newSpanish
                  );
                  //send word to saga to get forvo audio
                  dispatch({
                    type: "FETCH_FORVO_SPANISH",
                    payload: newSpanish,
                  });
                }}
              >
                {word.spanish}
              </h3>
            )}
            {toggleItalian && (
              <h3
                className="italianWord"
                onClick={() => {
                  //create regex to remove "il " and "lo " and "la " and "gli " and "l'" and "i " and "le " and anything after a comma and anything in parentheses from word.spanish
                  const regex =
                    /(^il |^lo |^la |^gli |^l'|^i |^le |, (.*)|\((.*?)\))/gi;
                  const newItalian =
                    word.italian.replace(
                      regex,
                      ""
                    );
                  console.log(
                    "new Italian is: ",
                    newItalian
                  );
                  //send word to saga to get forvo audio
                  dispatch({
                    type: "FETCH_FORVO_ITALIAN",
                    payload: newItalian,
                  });
                }}
              >
                {word.italian}
              </h3>
            )}
            {togglePortuguese && (
              <h3
                className="portugueseWord"
                onClick={() => {
                  //create regex to remove "o " "a " "os " "as " and anything after a comma and anything in parentheses from word.portuguese
                  const regex =
                    /(^o |^a |^os |^as |, (.*)|\((.*?)\))/gi;
                  const newPortuguese =
                    word.portuguese.replace(
                      regex,
                      ""
                    );
                  console.log(
                    "new Portuguese is: ",
                    newPortuguese
                  );
                  //send word to saga to get forvo audio
                  dispatch({
                    type: "FETCH_FORVO_PORTUGUESE",
                    payload: newPortuguese,
                  });
                }}
              >
                {word.portuguese}
              </h3>
            )}
          </div>
        );
      })}
      <div className="addFavContainer">
        <AddFavoriteWordPage />
      </div>
      {/* <div className="randomWordContainer">
        <button
          onClick={handleRandom}
          className="randomSearch"
        >
          Random Word
        </button>
      </div> */}
    </div>
  );
}

export default WordPage;
