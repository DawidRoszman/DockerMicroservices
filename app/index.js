const express = require("express");

const app = express();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "pass",
});

const interval = setInterval(() => {
  connection.connect((err) => {
    if (err) {
      console.log("Error connecting to Db");
      console.log(err);
      return;
    }
    console.log("Connection established");
    clearInterval(interval);
  });
}, 5000);

const PORT = 3000;

app.get("/", (req, res) => {
  connection.query("SHOW DATABASES", (err, rows) => {
    if (err) {
      console.log("Error connecting to Db");
      res.send(err);
      return;
    }
    console.log("Data received from Db:\n");
    console.log(rows);
    res.send(rows);
  });
});

app.get("/api", (req, res) => {
  res.send("API");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on PORT ${PORT}`);
});
