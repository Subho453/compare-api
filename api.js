const express = require("express");
const app = express();
const port = 4000;
const products = require("./products.json");

app.get("/", function (req, res) {
  res.send(products);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
