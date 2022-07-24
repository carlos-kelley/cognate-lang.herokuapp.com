//imports
import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./LanguageTogglesButton.css";

function LanguageToggleButton() {
  //create store
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
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    console.log("refreshing");
    dispatch({ type: "TOGGLE_REFRESH" });
  }, []);
  //end useEffect

  const handleEnglishClick = () => {
    console.log("in handleEnglishClick");
    //if toggleEnglish is true, set it to false
    if (toggleEnglish === true) {
      console.log(
        "toggleEnglish:",
        toggleEnglish
      );
      dispatch({
        type: "TOGGLE_ENGLISH",
        payload: false,
      });
      event.target.classList.add("ENtoggleOff");
    }
    //else if toggleEnglish is false, set it to true
    else if (toggleEnglish === false) {
      console.log(
        "toggleEnglish:",
        toggleEnglish
      );
      dispatch({
        type: "TOGGLE_ENGLISH",
        payload: true,
      });
      event.target.classList.add("ENtoggleOn");
    }
  };

  const handleFrenchClick = () => {
    console.log("in handleFrenchClick");
    //if toggleEnglish is true, set it to false
    if (toggleFrench === true) {
      console.log("toggleFrench:", toggleFrench);
      dispatch({
        type: "TOGGLE_FRENCH",
        payload: false,
      });
    }
    //else if toggleFrench is false, set it to true
    else if (toggleFrench === false) {
      console.log("toggleFrench:", toggleFrench);
      dispatch({
        type: "TOGGLE_FRENCH",
        payload: true,
      });
    }
  };

  const handleSpanishClick = () => {
    console.log("in handleSpanishClick");
    //if toggleSpanish is true, set it to false
    if (toggleSpanish === true) {
      console.log(
        "toggleSpanish:",
        toggleSpanish
      );
      dispatch({
        type: "TOGGLE_SPANISH",
        payload: false,
      });
    }
    //else if toggleSpanish is false, set it to true
    else if (toggleSpanish === false) {
      console.log(
        "toggleSpanish:",
        toggleSpanish
      );
      dispatch({
        type: "TOGGLE_SPANISH",
        payload: true,
      });
    }
  };

  const handleItalianClick = () => {
    console.log("in handleItalianClick");
    //if toggleItalian is true, set it to false
    if (toggleItalian === true) {
      console.log(
        "toggleItalian:",
        toggleItalian
      );
      dispatch({
        type: "TOGGLE_ITALIAN",
        payload: false,
      });
    }
    //else if toggleItalian is false, set it to true
    else if (toggleItalian === false) {
      console.log(
        "toggleItalian:",
        toggleItalian
      );
      dispatch({
        type: "TOGGLE_ITALIAN",
        payload: true,
      });
    }
  };

  const handlePortugueseClick = () => {
    console.log("in handlePortugueseClick");
    //if togglePortuguese is true, set it to false
    if (togglePortuguese === true) {
      console.log(
        "togglePortuguese:",
        togglePortuguese
      );
      dispatch({
        type: "TOGGLE_PORTUGUESE",
        payload: false,
      });
    }
    //else if togglePortuguese is false, set it to true
    else if (togglePortuguese === false) {
      console.log(
        "togglePortuguese:",
        togglePortuguese
      );
      dispatch({
        type: "TOGGLE_PORTUGUESE",
        payload: true,
      });
    }
  };

  return (
    <div>
      {/* // if location.pathname is "/word/:id,
      render the buttons // else, render nothing */}
      {location.pathname.indexOf("/word/") ===
      0 ? (
        <div className="language-toggle-button-container">
          <button
            onClick={handleEnglishClick}
            className={
              toggleEnglish === true
                ? "ENtoggleOn"
                : "ENtoggleOff"
            }
          >
            EN
          </button>
          <button
            onClick={handleFrenchClick}
            className={
              toggleFrench === true
                ? "FRtoggleOn"
                : "FRtoggleOff"
            }
          >
            FR
          </button>
          <button
            onClick={handleSpanishClick}
            className={
              toggleSpanish === true
                ? "SPtoggleOn"
                : "SPtoggleOff"
            }
          >
            SP
          </button>
          <button
            onClick={handleItalianClick}
            className={
              toggleItalian === true
                ? "ITtoggleOn"
                : "ITtoggleOff"
            }
          >
            IT
          </button>
          <button
            onClick={handlePortugueseClick}
            className={
              togglePortuguese === true
                ? "POtoggleOn"
                : "POtoggleOff"
            }
          >
            PO
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LanguageToggleButton;
