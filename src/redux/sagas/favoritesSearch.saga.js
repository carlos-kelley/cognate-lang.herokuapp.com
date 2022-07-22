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

function* favoritesSearchSaga() {
  yield takeLatest(
    "FETCH_FAVORITES_SEARCH",
    fetchFavoritesSearch
  );
}

export default favoritesSearchSaga;
