import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import globalSearch from "./globalSearch.reducer";
import favorites from "./favorites.reducer";
import id from "./id.reducer";
import favoritesSearch from "./favoritesSearch.reducer";
import thisWord from "./thisWord.reducer";
import toggleSpanish from "./toggleSpanish.reducer";
import toggleItalian from "./toggleItalian.reducer";
import toggleFrench from "./toggleFrench.reducer";
import toggleEnglish from "./toggleEnglish.reducer";
import togglePortuguese from "./togglePortuguese.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  globalSearch, //will have the global search entry
  favorites,
  id,
  favoritesSearch,
  thisWord,
  toggleEnglish,
  toggleSpanish,
  toggleItalian,
  toggleFrench,
  togglePortuguese
});

export default rootReducer;
