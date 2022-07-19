import axios from "axios";
import {
  put,
  takeLatest,
} from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_WORDS" actions
function* fetchWords() {
  console.log("fetching words");
  try {
    const response = yield axios.get(
      "/api/words"
    );
    console.log("get all words:", response.data);
    yield put({
      type: "SET_WORDS",
      payload: response.data,
    });
  } catch (error) {
    console.log("error in fetchWords:", error);
  }
}

function* globalSearchSaga() {
  yield takeLatest("FETCH_WORDS", fetchWords);
}

export default globalSearchSaga;
