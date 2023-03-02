import axios from "axios";
import {
  put,
  takeLatest,
} from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_WORDS" actions

function* fetchForvoEnglish(action) {
  const forvoKey = process.env.REACT_APP_FORVOKEY;
  console.log(
    "process.env.REACT_APP_FORVOKEY in forvo saga : ",
    process.env.REACT_APP_FORVOKEY
  );
  console.log(
    "fetching forvo english action payload:",
    action.payload
  );
  try {
    const response = yield axios.get(
      `https://apifree.forvo.com/key/${forvoKey}/format/json/action/word-pronunciations/word/${action.payload}/language/en`,
      {
        headers: {
          "Access-Control-Allow-Origin":
            "https://cognate-lang.herokuapp.com/",
          "Access-Control-Allow-Methods":
            "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    console.log(
      "get forvo english:",
      response.data
    );
    yield put({
      type: "SET_FORVO_ENGLISH",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoEnglish:",
      error
    );
  }
}

function* fetchForvoFrench(action) {
  const forvoKey = process.env.REACT_APP_FORVOKEY;

  console.log("fetching forvo french");
  try {
    const response = yield axios.get(
      `https://sdnii-cors-anywhere.herokuapp.com/https://apifree.forvo.com/key/${forvoKey}/format/json/action/word-pronunciations/word/${action.payload}/language/fr`
    );
    console.log(
      "get forvo french:",
      response.data
    );
    yield put({
      type: "SET_FORVO_FRENCH",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoFrench:",
      error
    );
  }
}

function* fetchForvoSpanish(action) {
  const forvoKey = process.env.REACT_APP_FORVOKEY;

  console.log("fetching forvo Spanish");
  try {
    const response = yield axios.get(
      `https://apifree.forvo.com/key/${forvoKey}/format/json/action/word-pronunciations/word/${action.payload}/language/es`
    );
    console.log(
      "get forvo spanosh:",
      response.data
    );
    yield put({
      type: "SET_FORVO_SPANISH",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoSPANISH:",
      error
    );
  }
}

function* fetchForvoItalian(action) {
  const forvoKey = process.env.REACT_APP_FORVOKEY;

  console.log("fetching forvo italian");
  try {
    const response = yield axios.get(
      `https://apifree.forvo.com/key/${forvoKey}/format/json/action/word-pronunciations/word/${action.payload}/language/it`
    );
    console.log(
      "get forvo italian:",
      response.data
    );
    yield put({
      type: "SET_FORVO_ITALIAN",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoITALIAN:",
      error
    );
  }
}

function* fetchForvoPortuguese(action) {
  const forvoKey = process.env.REACT_APP_FORVOKEY;

  console.log("fetching forvo Portuguese");
  try {
    const response = yield axios.get(
      `https://apifree.forvo.com/key/${forvoKey}/format/json/action/word-pronunciations/word/${action.payload}/language/po`
    );
    console.log(
      "get forvo portuguese:",
      response.data
    );
    yield put({
      type: "SET_FORVO_PORTUGUESE",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "error in fetchForvoPortuguese:",
      error
    );
  }
}

function* forvoSaga() {
  yield takeLatest(
    "FETCH_FORVO_ENGLISH",
    fetchForvoEnglish
  );
  yield takeLatest(
    "FETCH_FORVO_FRENCH",
    fetchForvoFrench
  );
  yield takeLatest(
    "FETCH_FORVO_SPANISH",
    fetchForvoSpanish
  );
  yield takeLatest(
    "FETCH_FORVO_ITALIAN",
    fetchForvoItalian
  );
  yield takeLatest(
    "FETCH_FORVO_PORTUGUESE",
    fetchForvoPortuguese
  );
}

export default forvoSaga;
