import * as database from "./database";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.listen(3001, () => {
  console.log("Server listening on 3001");
});
