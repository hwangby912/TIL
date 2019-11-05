const express = require("express");
const router = express.Router();

const articles = [
  { id: 1, author: "Arron", content: "ramsey" },
  { id: 2, author: "jack", content: "wilshere" }
];

router.get("/:id", (req, res) => {
  res.send(articles.find(article => article.id === parseInt(req.params.id)));
});

router.post("/", (req, res) => {
  articles.push({
    id: articles.length + 1,
    author: req.body.author,
    content: req.body.content
  });
  res.send("Posting Complete!!!");
});

module.exports = router;
