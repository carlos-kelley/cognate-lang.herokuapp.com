//currently unused. attempt to use this to get the word from the database
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log("req query: ", req.query);
res.send ("hello");
  const query = `SELECT *
  FROM words
  WHERE id = '${req.query.id}'
  `; //when you click a word, need to navigate to a page with this query and fetch on useEffect
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
