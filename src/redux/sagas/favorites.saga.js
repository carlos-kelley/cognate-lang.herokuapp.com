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

function* favoritesSaga() {
  yield takeLatest("FETCH_FAVORITES", fetchFavorites);
}

export default favoritesSaga;
