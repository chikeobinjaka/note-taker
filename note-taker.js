const express = require("express");
const fs = require("fs");

require("dotenv").config();
let app = null,
  PORT = null,
  noteMode = null;

function initialize() {
  app = express();
  PORT = process.env.EXPRESS_PORT || 3000;
  app.use(express.static("public"));
  // Sets up the Express app to handle data parsing
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Routes
  // ===========================================================
  app.get("/", function (req, res) {
    // get the index file and serve it
    let data = fs.readFileSync("./public/index.html", { encoding: "utf8", flag: "r" });
    console.log("Serving index.html:\n" + data);
    //res.send(data);
    res.send("Sending data...");
  });

  app.get("/notes", function (req, res) {
    // get the index file and serve it
    let data = fs.readFileSync("./public/notes.html", { encoding: "utf8", flag: "r" });
    console.log("Serving index.html:\n" + data);
    res.send(data);
  });

  // Listener
  // ===========================================================
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
}

initialize();
