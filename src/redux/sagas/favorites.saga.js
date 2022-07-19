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
  try {
    const response = yield axios.delete(
      `/api/favorites/${action.payload}`
    );
    console.log("delete favorite:", response.data);
    yield put({
      type: "FETCH_FAVORITES",
    });
  } catch (error) {
    console.log("error in deleteFavorite:", error);
  }
}

function* favoritesSaga() {
  yield takeLatest("FETCH_FAVORITES", fetchFavorites);
  yield takeLatest("DELETE_FAVORITE", deleteFavorite);
}

export default favoritesSaga;
