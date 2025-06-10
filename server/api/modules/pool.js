const pg = require("pg");
const url = require("url");

let config;

if (process.env.DATABASE_URL) {
  console.log(
    "Connected to DB:",
    process.env.DATABASE_URL
  );
  // Parse the DATABASE_URL for Neon or any remote DB
  const params = url.parse(
    process.env.DATABASE_URL
  );
  const auth = params.auth
    ? params.auth.split(":")
    : [];

  config = {
    user: process.env.DATABASE_USER || auth[0],
    password:
      process.env.DATABASE_PASSWORD || auth[1],
    host:
      process.env.DATABASE_HOST ||
      params.hostname,
    port: process.env.DATABASE_PORT || 5432,
    database:
      process.env.DATABASE_NAME ||
      params.pathname.split("/")[1],
    ssl: {
      require: true, // Neon requires this for SSL
    },
    max: 10,
    idleTimeoutMillis: 30000,
  };
} else {
  // Local development config
  config = {
    host: "localhost",
    port: 5432,
    database: "cognate", // your local DB name
    max: 10,
    idleTimeoutMillis: 30000,
  };
}

// console.log("🧪 PG Config:", config);
const pool = new pg.Pool(config);
pool.on("connect", () => {
  console.log(
    "✅ PostgreSQL pool connected successfully"
  );
});

pool.on("error", (err) => {
  console.error(
    "Unexpected error on idle client",
    err
  );
  process.exit(-1);
});

module.exports = pool;
