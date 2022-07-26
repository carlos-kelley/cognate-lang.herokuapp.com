//router imports
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//query to get favorites based on search
router.get("/", (req, res) => {
  console.log("req query: ", req.query);
  pool
    .query(
      `UPDATE favorites
      SET user_id = ${req.user.id}
      WHERE user_id = ${req.user.id}
      RETURNING id;`
    )
    .then((result) => {
      const favoritesId = result.rows[0].id;
      console.log("favoritesId: ", favoritesId);
      //have to make diff if statements to order by language alphabetically?
      const query = `SELECT * FROM words 
  JOIN favorites_word
  ON words.id = favorites_word.word_id 
  JOIN favorites 
  ON favorites_word.favorites_id = favorites.id
  WHERE (english LIKE '%${req.query.word}%'
  OR spanish LIKE '%${req.query.word}%'
  OR french LIKE '%${req.query.word}%'
  OR italian LIKE '%${req.query.word}%'
  OR portuguese LIKE '%${req.query.word}%')
  AND favorites_word.favorites_id = ${favoritesId};
  `;
      pool
        .query(query)
        .then((result) => {
          res.send(result.rows);
        })
        .catch((err) => {
          console.log(
            "ERROR: Get favorites search weirdness",
            err
          );
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      console.log(
        `ERROR: Get favorites search: ${error}`
      );
      res.sendStatus(500);
    });
});

module.exports = router;
