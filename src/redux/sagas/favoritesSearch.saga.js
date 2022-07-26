import axios from "axios";
import {
  put,
  takeLatest,
} from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_WORDS" actions

function* fetchFavoritesSearch(action) {
  let word = action.payload;
  console.log(
    "fetching favs search: ",
    action.payload
  );
  try {
    const response = yield axios.get(
      `/api/favoritesSearch?word=${action.payload}`
    );
    console.log(
      "get favorites search:",
      response.data
    );
    yield put({
      type: "SET_FAVORITES_SEARCH",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchFavoritesSearch:",
      error
    );
  }
}

function* deleteFavoriteSearch(action) {
  console.log("deleting fav search");

  let deleteWord = action.payload; //THIS IS WRONG. It should be action.payload, but the IDs are incorrect in the database so it won't work
  try {
    console.log(
      "delete action.payload:",
      deleteWord
    );
    yield axios.delete(
      `/api/favorites?id=${deleteWord}`
    );
    yield put({
      type: "SET_FAVORITES_SEARCH",
      //does it also need to set?
    });
  } catch (error) {
    console.log(
      "error in deleteFavoriteSearch:",
      error
    );
  }
}

function* favoritesSearchSaga() {
  yield takeLatest(
    "FETCH_FAVORITES_SEARCH",
    fetchFavoritesSearch
  );
  yield takeLatest(
    "DELETE_FAVORITE_SEARCH",
    deleteFavoriteSearch
  );
}

export default favoritesSearchSaga;
