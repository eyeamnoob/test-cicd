const express = require("express");
const app = express();
const path = require("path");
const LIARA_URL = process.env.LIARA_URL || "0.0.0.0";

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () =>
  console.log(`app listening on port 3005 on ${LIARA_URL}`)
);
