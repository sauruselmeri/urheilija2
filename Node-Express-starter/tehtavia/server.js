const express = require("express");
const fs = require("fs");

const app = express();

const port = 3000;

let sanakirja = [];

const data = fs.readFileSync("./sanakirja.txt", {
  encoding: "utf8",
  flag: "r",
});

const splitLines = data.split(/\r?\n/);

splitLines.forEach((line) => {
  const sanat = line.split(" ");

  const sana = {
    fin: sanat[0],
    eng: sanat[1],
  };

  sanakirja.push(sana);
});

console.log(sanakirja);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//CORS määrittely
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-type", "application/json");
  next();
});

app.get("/sanakirja/:fin", (req, res) => {
  const fin = String(req.params.fin);
  const sana = sanakirja.find((sana) => sana.fin === fin);
  res.json(sana ? sana.eng : { message: "Sanaa ei löytynyt!" });
});

app.get("/sanakirja", (req, res) => {
  res.json(sanakirja);
});

app.post("/sanakirja", (req, res) => {
  const sana = req.body;
  sanakirja.push(sana);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Kuunnellaan portissa ${port}`);
});
