const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  //have to make diff if statements to order by language alphabetically?
  const query = `SELECT *
FROM words
WHERE english LIKE '%art%'
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
