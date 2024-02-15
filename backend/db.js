import pg from "pg";

const pool = new pg.Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD, // password of psql
  host: process.env.POSTGRES_HOST, // host name
  port: process.env.POSTGRES_PORT, // port number, 5432 by default
  database: process.env.POSTGRES_DB, // database name
});

export default pool;
