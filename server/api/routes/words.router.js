//router imports
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//query to get words based on search
router.get("/", (req, res) => {
  console.log("req query: ", req.query);

  //have to make diff if statements to order by language alphabetically?
  const query = `SELECT *
  FROM "words"
  WHERE "english" LIKE '%${req.query.word}%'
  OR "spanish" LIKE '%${req.query.word}%'
  OR "french" LIKE '%${req.query.word}%'
  OR "italian" LIKE '%${req.query.word}%'
  OR "portuguese" LIKE '%${req.query.word}%'
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(
        `ERROR: Get all words failed for query ${query}:`,
        err
      );
      res.sendStatus(500);
    });
});

module.exports = router;
