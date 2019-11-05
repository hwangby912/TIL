const express = require("express");
const router = express.Router();

const articles = [
  { id: 1, author: 1, content: "hello" },
  { id: 2, author: 3, content: "hi" }
];

router.get("/:id", (req, res) => {
  res.send(articles.find(articles => articles.id === parseInt(req.params.id)));
});

router.post("/", (req, res) => {
  articles.push({
    id: articles.length + 1,
    author: req.body.author,
    content: req.body.content
  });
  res.send("posting complete");
});

module.exports = router;
