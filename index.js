const express = require("express");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  return res.status(200).json({
    meg:"working",
  });
});

app.get("/login", (req, res) => {
  return res.status(200).json({
    meg:"You are on login route",
  });
});

app.get("/register", (req, res) => {
  return res.status(200).json({
    meg:"You are on register route",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on $(PORT)`);
});