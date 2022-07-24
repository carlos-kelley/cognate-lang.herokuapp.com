const express = require("express");
const router = express.Router();
const axios = require("axios");


axios
  .get(
    "https://apifree.forvo.com/key/6ecbcf479748597038b9c3d34a1bbd4a/format/json/action/word-pronunciations/word/cat/language/en"
  )
  .then((resp) => {
    console.log(resp.data);
  });

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
