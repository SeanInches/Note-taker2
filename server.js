const express = require("express");
const path = require("path");
const fs = require("fs");
const noteData = require("./db/db.json"); // Helper method for generating unique ids
//const uuid = require("./helpers/uuid");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// GET Route for notes.html page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET api/notes and return db.json
app.get("/api/notes", (req, res) => res.json(noteData));
app.get("/api/notes/:note_id", (req, res) => res.json(noteData));

// GET Route for wildcard page
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);