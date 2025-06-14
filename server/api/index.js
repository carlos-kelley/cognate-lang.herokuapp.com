const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const wordsRouter = require("./routes/words.router");
const favoritesRouter = require("./routes/favorites.router");
const thisWordRouter = require("./routes/thisWord.router");
const favoritesSearchRouter = require("./routes/favoritesSearch.router");
const forvoRouter = require("./routes/forvo.router");

// const favoritesListRouter = require("./routes/favoritesList.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ extended: true })
);

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/words", wordsRouter);
app.use("/api/favorites", favoritesRouter);
app.use(
  "/api/favoritesSearch",
  favoritesSearchRouter
);
app.use("/api/thisWord", thisWordRouter);
app.use("/api/forvo", forvoRouter);
// app.use("/api/favoritesList", favoritesListRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });
module.exports = app;