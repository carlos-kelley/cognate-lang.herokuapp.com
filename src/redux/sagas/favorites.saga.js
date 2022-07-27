import axios from "axios";
import {
  put,
  takeLatest,
} from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_WORDS" actions

function* fetchFavorites() {
  console.log("fetching favs");
  try {
    const response = yield axios.get(
      "/api/favorites"
    );
    console.log("get all favorites:", response.data);
    yield put({
      type: "SET_FAVORITES",
      payload: response.data,
    });
  } catch (error) {
    console.log("error in fetchFavorites:", error);
  }
}

// worker Saga: will be fired on "DELETE_FAVORITE" actions
function* deleteFavorite(action) {
  console.log("deleting fav");
  
  let deleteWord = action.payload; //THIS IS WRONG. It should be action.payload, but the IDs are incorrect in the database so it won't work
  try {
    console.log("delete action.payload:", deleteWord);
    yield axios.delete(
      `/api/favorites?id=${deleteWord}`
    );
    yield put({
      type: "FETCH_FAVORITES",
    });
  } catch (error) {
    console.log("error in deleteFavorite:", error);
  }
}


function* addFavorite(action) {
  console.log("adding fav");
  let wordID = action.payload;
  try {
    yield axios.post(
      "/api/favorites",
      {
        word_id: wordID,
      }
    );
    yield put({
      type: "FETCH_FAVORITES",
    });
  } catch (error) {
    console.log("error in addFavorite:", error);
  }
}

    

function* favoritesSaga() {
  yield takeLatest("FETCH_FAVORITES", fetchFavorites);
  yield takeLatest("DELETE_FAVORITE", deleteFavorite);
  yield takeLatest("ADD_FAVORITE", addFavorite);
}

export default favoritesSaga;
