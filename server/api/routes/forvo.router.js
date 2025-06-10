// server/routes/forvo.router.js
const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", async (req, res) => {
  const word = req.query.word;
  const language = req.query.language || "en"; // default to English if not provided

  if (!word) {
    return res
      .status(400)
      .json({
        error: "Missing 'word' query parameter",
      });
  }

  try {
    const response = await axios.get(
      `https://apifree.forvo.com/key/${
        process.env.REACT_APP_FORVOKEY
      }/format/json/action/word-pronunciations/word/${encodeURIComponent(
        word
      )}/language/${encodeURIComponent(language)}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Forvo API error:",
      error.message
    );
    res
      .status(500)
      .json({
        error: "Failed to fetch Forvo data",
      });
  }
});

module.exports = router;
