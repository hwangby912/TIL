const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "jo" },
  { id: 2, name: "woo" },
  { id: 3, name: "ri" }
];

router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;
