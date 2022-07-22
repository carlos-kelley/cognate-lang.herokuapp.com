//imports
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

// worker Saga: will be fired on "FETCH_THIS_WORD" actions
function* fetchThisWord(action) {
  let word = action.payload;
  console.log(
    "fetching this word:",
    action.payload
  );
  try {
    const response = yield axios.get(
      `/api/thisWord?word=${word}`
    );
    console.log("get this words:", response.data);
    yield put({
      type: "SET_THIS_WORD",
      payload: response.data,
    });
  } catch (error) {
    console.log("error in fetchThisWord:", error);
  }
}
//ignore this comment
function* fetchThisWordSaga() {
  yield takeLatest(
    "FETCH_THIS_WORD",
    fetchThisWord
  );
}

export default fetchThisWordSaga;
