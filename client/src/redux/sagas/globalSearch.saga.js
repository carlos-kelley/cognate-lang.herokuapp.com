import axios from "axios";
import {
  actionChannel,
  put,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import {
  useDispatch,
  useSelector,
} from "react-redux";

// worker Saga: will be fired on "FETCH_WORDS" actions
function* fetchWords(action) {
  let word = action.payload;
  console.log("fetching words:", action.payload);
  try {
    const response = yield axios.get(
      `/api/words?word=${word}`
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
//ignore this comment
function* globalSearchSaga() {
  yield takeLatest("FETCH_WORDS", fetchWords);
}

export default globalSearchSaga;
