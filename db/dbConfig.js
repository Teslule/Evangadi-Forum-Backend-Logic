require("dotenv").config();
const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  // socketPath: process.env.DB_SOCKET_PATH,
  connectionLimit: 10,
});

dbConnection.execute("select 'test'", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});

module.exports = dbConnection.promise();
