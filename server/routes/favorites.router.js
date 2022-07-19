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
// delete word from favorites -this is not quite right 
router.delete("/:id", (req, res) => {
  const query = `DELETE FROM favorites_word WHERE favorites_id = $1 AND word_id = $2`;
  const favoritesId = req.params.id;
  const wordId = req.query.wordId;
  pool
    .query(query, [favoritesId, wordId])
    .then((result) => {
      res.sendStatus(200);
    }
  )
    .catch((err) => {
      console.log("ERROR: Delete word from favorites", err);
      res.sendStatus(500);
    }
  );
}
);
module.exports = router;
