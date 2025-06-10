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
  const [selectedWord, setSelectedWord] =
    useState(null);

  const audioRef = useRef(null);

  const forvoFrenchRef = useRef(null);
  const forvoEnglishRef = useRef(null);
  const forvoSpanishRef = useRef(null);
  const forvoItalianRef = useRef(null);
  const forvoPortugueseRef = useRef(null);

  useEffect(() => {
    forvoFrenchRef.current = forvoFrench;
  }, [forvoFrench]);

  useEffect(() => {
    forvoEnglishRef.current = forvoEnglish;
  }, [forvoEnglish]);

  useEffect(() => {
    forvoSpanishRef.current = forvoSpanish;
  }, [forvoSpanish]);

  useEffect(() => {
    forvoItalianRef.current = forvoItalian;
  }, [forvoItalian]);

  useEffect(() => {
    forvoPortugueseRef.current = forvoPortuguese;
  }, [forvoPortuguese]);

  useEffect(() => {
    if (
      selectedWord &&
      forvoFrenchRef.current === forvoFrench &&
      forvoFrench &&
      forvoFrench.items &&
      forvoFrench.items.length
    ) {
      const audio = new Audio(
        forvoFrench.items[0].pathmp3
      );
      console.log(
        "forvoFrench in func is: ",
        forvoFrench.items[0].pathmp3
      );
      audioRef.current = audio;
      Promise.resolve()
        .then(() => {
          audioRef.current.pause(); // pause the old audio before playing new audio
        })
        .then(() => {
          audioRef.current.currentTime = 0; // reset the audio to start from the beginning
          return new Promise((resolve) =>
            setTimeout(resolve, 1000)
          );
        })
        .then(() => {
          audioRef.current.play(); // play the new audio
        });
    }
  }, [forvoFrench, selectedWord]);

  useEffect(() => {
    if (
      selectedWord &&
      forvoEnglishRef.current === forvoEnglish &&
      forvoEnglish &&
      forvoEnglish.items &&
      forvoEnglish.items.length
    ) {
      const audio = new Audio(
        forvoEnglish.items[0].pathmp3
      );
      console.log(
        "forvoEnglish in func is: ",
        forvoEnglish.items[0].pathmp3
      );
      audioRef.current = audio;
      Promise.resolve()
        .then(() => {
          audioRef.current.pause(); // pause the old audio before playing new audio
        })
        .then(() => {
          audioRef.current.currentTime = 0; // reset the audio to start from the beginning
          return new Promise((resolve) =>
            setTimeout(resolve, 1000)
          );
        })
        .then(() => {
          audioRef.current.play(); // play the new audio
        });
    }
  }, [forvoEnglish, selectedWord]);

  useEffect(() => {
    if (
      selectedWord &&
      forvoSpanishRef.current === forvoSpanish &&
      forvoSpanish &&
      forvoSpanish.items &&
      forvoSpanish.items.length
    ) {
      const audio = new Audio(
        forvoSpanish.items[0].pathmp3
      );
      console.log(
        "forvoSpanish in func is: ",
        forvoSpanish.items[0].pathmp3
      );
      audioRef.current = audio;
      Promise.resolve()
        .then(() => {
          audioRef.current.pause(); // pause the old audio before playing new audio
        })
        .then(() => {
          audioRef.current.currentTime = 0; // reset the audio to start from the beginning
          return new Promise((resolve) =>
            setTimeout(resolve, 1000)
          );
        })
        .then(() => {
          audioRef.current.play(); // play the new audio
        });
    }
  }, [forvoSpanish, selectedWord]);
  useEffect(() => {
    if (
      selectedWord &&
      forvoItalianRef.current === forvoItalian &&
      forvoItalian &&
      forvoItalian.items &&
      forvoItalian.items.length
    ) {
      const audio = new Audio(
        forvoItalian.items[0].pathmp3
      );
      console.log(
        "forvoItalian in func is: ",
        forvoItalian.items[0].pathmp3
      );
      audioRef.current = audio;
      Promise.resolve()
        .then(() => {
          audioRef.current.pause(); // pause the old audio before playing new audio
        })
        .then(() => {
          audioRef.current.currentTime = 0; // reset the audio to start from the beginning
          return new Promise((resolve) =>
            setTimeout(resolve, 1000)
          );
        })
        .then(() => {
          audioRef.current.play(); // play the new audio
        });
    }
  }, [forvoItalian, selectedWord]);
  useEffect(() => {
    if (
      selectedWord &&
      forvoPortugueseRef.current ===
        forvoPortuguese &&
      forvoPortuguese &&
      forvoPortuguese.items &&
      forvoPortuguese.items.length
    ) {
      const audio = new Audio(
        forvoPortuguese.items[0].pathmp3
      );
      console.log(
        "forvoPortuguese in func is: ",
        forvoPortuguese.items[0].pathmp3
      );
      audioRef.current = audio;
      Promise.resolve()
        .then(() => {
          audioRef.current.pause(); // pause the old audio before playing new audio
        })
        .then(() => {
          audioRef.current.currentTime = 0; // reset the audio to start from the beginning
          return new Promise((resolve) =>
            setTimeout(resolve, 1000)
          );
        })
        .then(() => {
          audioRef.current.play(); // play the new audio
        });
    }
  }, [forvoPortuguese, selectedWord]);

  function cleanFrenchWord(french) {
    const regex =
      /^(l'|le |la )|(, .*?)|(\(.*?\))|(les )/gi;
    return french.replace(regex, "").trim();
  }
  function cleanEnglishWord(english) {
    const regex =
      /^(l'|le |la )|(, .*?)|(\(.*?\))|(les )/gi;
    return english.replace(regex, "").trim();
  }

  function cleanSpanishWord(spanish) {
    const regex =
      /^(la |el |los |las |, .*?)|(\(.*?\))/gi;
    return spanish.replace(regex, "").trim();
  }
  function cleanItalianWord(italian) {
    const regex =
      /^(il |lo |la |gli |l'|^i |^le |, .*?)|(\(.*?\))/gi;
    return italian.replace(regex, "").trim();
  }
  function cleanPortugueseWord(portuguese) {
    const regex =
      /^(o |a |os |as |, .*?)|(\(.*?\))/gi;
    return portuguese.replace(regex, "").trim();
  }

  // Define a new function to play the audio
  function playForvoFrenchAudio(
    french,
    dispatch
  ) {
    const cleanFrench = cleanFrenchWord(french);
    dispatch({
      type: "FETCH_FORVO_FRENCH",
      payload: cleanFrench,
    });
  }

  function playForvoEnglishAudio(
    english,
    dispatch
  ) {
    const cleanEnglish =
      cleanEnglishWord(english);
    dispatch({
      type: "FETCH_FORVO_ENGLISH",
      payload: cleanEnglish,
    });
  }
  function playForvoSpanishAudio(
    spanish,
    dispatch
  ) {
    const cleanSpanish =
      cleanSpanishWord(spanish);
    dispatch({
      type: "FETCH_FORVO_SPANISH",
      payload: cleanSpanish,
    });
  }
  function playForvoItalianAudio(
    italian,
    dispatch
  ) {
    const cleanItalian =
      cleanItalianWord(italian);
    dispatch({
      type: "FETCH_FORVO_ITALIAN",
      payload: cleanItalian,
    });
  }
  function playForvoPortugueseAudio(
    portuguese,
    dispatch
  ) {
    const cleanPortuguese =
      cleanPortugueseWord(portuguese);
    dispatch({
      type: "FETCH_FORVO_PORTUGUESE",
      payload: cleanPortuguese,
    });
  }

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
      <div className="wordSearchContainer withToggle">
        <GlobalSearchPage />
      </div>

      {thisWord.map((word) => {
        return (
          <div
            className="searchResults"
            key={word.id}
          >
            {toggleEnglish && (
              <>
                <h3
                  className="englishWord"
                  onClick={() => {
                    console.log(
                      "clicked play button for english word"
                    );
                    setSelectedWord(word);
                    playForvoEnglishAudio(
                      word.english,
                      dispatch
                    );
                  }}
                >
                  {word.english}
                </h3>
              </>
            )}
            {toggleFrench && (
              <>
                <h3
                  className="frenchWord"
                  onClick={() => {
                    console.log(
                      "clicked play button for french word"
                    );
                    setSelectedWord(word);
                    playForvoFrenchAudio(
                      word.french,
                      dispatch
                    );
                  }}
                >
                  {word.french}
                </h3>
              </>
            )}
            {toggleSpanish && (
              <>
                <h3
                  className="spanishWord"
                  onClick={() => {
                    console.log(
                      "clicked play button for spanish word"
                    );
                    setSelectedWord(word);
                    playForvoSpanishAudio(
                      word.spanish,
                      dispatch
                    );
                  }}
                >
                  {word.spanish}
                </h3>
              </>
            )}
            {toggleItalian && (
              <>
                <h3
                  className="italianWord"
                  onClick={() => {
                    console.log(
                      "clicked play button for italian word"
                    );
                    setSelectedWord(word);
                    playForvoItalianAudio(
                      word.italian,
                      dispatch
                    );
                  }}
                >
                  {word.italian}
                </h3>
              </>
            )}
            {togglePortuguese && (
              <>
                <h3
                  className="portugueseWord"
                  onClick={() => {
                    console.log(
                      "clicked play button for portuguese word"
                    );
                    setSelectedWord(word);
                    playForvoPortugueseAudio(
                      word.portuguese,
                      dispatch
                    );
                  }}
                >
                  {word.portuguese}
                </h3>
              </>
            )}
          </div>
        );
      })}
      <div className="addFavContainer">
        <AddFavoriteWordPage />
      </div>
    </div>
  );
}

export default WordPage;
