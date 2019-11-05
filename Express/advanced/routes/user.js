const express = require("express");
const router = express.Router();
const users = [
  { id: 1, name: "Hwang" },
  { id: 2, name: "Byeong" },
  { id: 3, name: "Yoon" }
];

router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;
