import {
  all,
  takeEvery,
} from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";
import axios from "axios";
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
  ]);
  yield takeEvery("FETCH_WORDS", fetchWords);
}

function* fetchWords() {
  try {
    const response = yield axios.get(
      "/api/words"
    );
    console.log("get all words:", words.data);
    yield put({
      type: "SET_WORDS",
      payload: words.data,
    });
  } catch (error) {
    console.log("error in fetchWords:", error);
  }
}
