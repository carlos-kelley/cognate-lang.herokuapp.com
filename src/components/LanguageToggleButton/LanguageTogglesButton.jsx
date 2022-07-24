//imports
import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import axios from "axios";

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



    const handleEnglishClick = () => {
        console.log("in handleEnglishClick");
        //if toggleEnglish true dispatch ENGLISH_FALSE
        if (toggleEnglish) {
            dispatch({
                type: "ENGLISH_FALSE",
            });
        }
        //if toggleEnglish false dispatch ENGLISH_TRUE
        else {
            dispatch({
                type: "ENGLISH_TRUE",
            });
        }
    };
    
    const handleFrenchClick = () => {
        console.log("in handleFrenchClick");
        //if toggleFrench true dispatch FRENCH_FALSE
        if (toggleFrench) {
            dispatch({
                type: "FRENCH_FALSE",
            });
        }
        //if toggleFrench false dispatch FRENCH_TRUE
        else {
            dispatch({
                type: "FRENCH_TRUE",
            });
        }
    };

    
    const handleSpanishClick = () => {
        
        console.log("in handleSpanishClick");
        //if toggleSpanish true dispatch SPANISH_FALSE
        if (toggleSpanish) {
            dispatch({
                type: "SPANISH_FALSE",
            });
            //if toggleSpanish false dispatch SPANISH_TRUE
        } else {
            dispatch({
                type: "SPANISH_TRUE",
            });
        }
    }
    
        const handleItalianClick = () => {
            console.log("in handleItalianClick");
            //if toggleItalian true dispatch ITALIAN_FALSE
            if (toggleItalian) {
                dispatch({
                    type: "ITALIAN_FALSE",
                });
                //if toggleItalian false dispatch ITALIAN_TRUE
            }
            else {
                dispatch({
                    type: "ITALIAN_TRUE",
                });
            }
        }
    
        const handlePortugueseClick = () => {
            console.log("in handlePortugueseClick");
            //if togglePortuguese true dispatch PORTUGUESE_FALSE
            if (togglePortuguese) {
                dispatch({
                    type: "PORTUGUESE_FALSE",
                });
                //if togglePortuguese false dispatch PORTUGUESE_TRUE
            }
            else {
                dispatch({
                    type: "PORTUGUESE_TRUE",
                });
            }
        }

        return (
            <div>
                <button onClick={handleEnglishClick}>EN</button>
                <button onClick={handleFrenchClick}>FR</button>
                <button onClick={handleSpanishClick}>SP</button>
                <button onClick={handleItalianClick}>IT</button>
                <button onClick={handlePortugueseClick}>PO</button>

            </div>
        
        );
    }

export default LanguageToggleButton;
