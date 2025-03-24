const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "vikas",
  password: "",//pass
});

app.listen(port, () => {
  console.log("listning to port 8080");
});

app.get("/", (req, res) => {
  let q = "SELECT COUNT(id) from users";

  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      console.log(results);
      let count = results[0];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/users", (req, res) => {
  let q = "select id,username from users";
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let count = results.length;
      res.render("user.ejs", { results, count });
    });
  } catch (err) {
    console.log(err);
    connection.end();
  }
});

app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  console.log(id);
  console.log(req.params);
  let q = `SELECT * FROM users WHERE id = "${id}"`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let user = results;
      console.log(user);
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    connection.end();
  }
});

app.patch("/users/:id", (req, res) => {
  let pass = req.body.pass;
  let q = `SELECT password FROM users WHERE password = "${pass}"`;
  let q1 = `UPDATE users SET username = "${req.body.name}" WHERE password = "${pass}"`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      console.log(results);
      if (results.length === 0) {
        res.render("wrongPass.ejs");
      } else if (pass === results[0]["password"]) {
        try {
          if (err) throw err;
          connection.query(q1, (err, results) => {
            console.log(results);
            res.redirect("/users");
          });
        } catch (err) {
          console.log(err);
          connection.end();
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.render("wrongPass.ejs");
    connection.end();
  }
});

app.get("/users/:id/delete", (req, res) => {
  console.log("id:", req.params);
  let { id } = req.params;
  let q = `SELECT * FROM users WHERE id = "${id}"`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      console.log(results);
      let user = results;
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    connection.close();
  }
});

app.patch("/users/:id/delete", (req, res) => {
  console.log("inside patch");
  let pass = req.body.pass;
  let q = `SELECT password FROM users WHERE password = "${pass}"`;
  let q1 = `DELETE FROM users WHERE password = "${pass}"`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      console.log(results);
      if (results.length === 0) {
        res.render("wrongPass.ejs");
      } else if (pass === results[0]["password"]) {
        try {
          if (err) throw err;
          connection.query(q1, (err, results) => {
            console.log(results);
            res.redirect("/users");
          });
        } catch (err) {
          console.log(err);
          connection.end();
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.render("wrongPass.ejs");
    connection.end();
  }
});

app.get("/users/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/users/new", (req, res) => {
  let data = Object.values(req.body);
  let q = `INSERT INTO users VALUES (?,?,?,?)`;
  connection.query(q, data, (err, results) => {
    try {
      if (err) throw err;
      res.redirect("/users");
    } catch (err) {
      console.log(err);
      res.render("addError.ejs", { err });
    }
  });
});
