const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

console.log ("process.env.REACT_APP_FORVOKEY in forvo router : ", process.env.REACT_APP_FORVOKEY);

axios
  .get(
    `https://apifree.forvo.com/key/${process.env.REACT_APP_FORVOKEY}/format/json/action/word-pronunciations/word/cat/language/en`
  )
  .then((resp) => {
    console.log("forvo resp: ", resp.data);
  });


module.exports = router;
