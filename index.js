const express = require("express");
const path = require("path");
const greetsRepository = require("./greetRepository");
const app = express();
const port = process.env.PORT || 3000;

app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/v1", function (req, res) {
  res.send("<h1>Versão Inicial...</h1>");
});

// returns the greet having the specific id
app.get("/v1/greet/id/:num(\\d+)?", function (req, res) {
  res.send(greetsRepository.getByID(req.params.num));
});

// returns n random greets
app.get("/v1/greet/:num(\\d+)?", function (req, res, next) {
  res.send(greetsRepository.getRandom(req.params.num || 1));
});

// returns greet based on specific category
app.get("/v1/greet/:category", function (req, res, next) {
    res.send(greetsRepository.getByCategory(req.params.category, 1));
  });

// returns n greet based on specific category
app.get("/v1/greet/:category/:num(\\d+)?", function (req, res, next) {
  res.send(greetsRepository.getByCategory(req.params.category, req.params.num || 1));
});

// generate a random greet
app.get("/v1/greet/generate", function (req, res, next) {
  res.send(greetsRepository.generateGreet());
});

app.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});
