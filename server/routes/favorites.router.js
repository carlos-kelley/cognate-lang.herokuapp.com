//server imports
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//query to get all favorites
router.get("/", (req, res) => {
  const query = `SELECT * FROM words 
  JOIN favorites_word
  ON words.id = favorites_word.word_id 
  JOIN favorites 
  ON favorites_word.favorites_id = favorites.id
  WHERE favorites.user_id = ($1)
  `;
  const values = [req.user.id];
  pool
    .query(query, values)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR GETting all words", err);
      res.sendStatus(500);
    });
});

//delete a word from favorites
router.delete("/", (req, res) => {
  console.log("req query: ", req.query);
  pool
    .query(
      `DELETE FROM "favorites_word" WHERE "word_id" = ${req.query.id};`
    )
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(
        `ERROR: Delete Favorite: ${error}`
      );
      res.sendStatus(500);
    });
});

// add word to favorites - NEXT STEP
router.post("/", (req, res) => {
  console.log("req body: ", req.body);
  res.send("woof");
  pool
    .query(
      `INSERT INTO "favorites_word" ("favorites_id", "word_id")
      VALUES (${req.body.favorites_id}, ${req.body.word_id});`
    )
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(
        `ERROR: Add Favorite: ${error}`
      );
      res.sendStatus(500);
    });
});

module.exports = router;
