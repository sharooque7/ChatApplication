const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sharooqu", (req, res, next) => {
  res.send("sharooque commit");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
