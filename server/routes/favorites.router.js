const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const query = `SELECT * FROM words 
  JOIN favorites_word
ON words.id = favorites_word.word_id 
JOIN favorites 
ON favorites_word.favorites_id = favorites.id;
`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all words", err);
      res.sendStatus(500);
    });
});
module.exports = router;
