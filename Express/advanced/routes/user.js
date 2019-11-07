const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// get요청의 :id와 req.params.id의 id와 같음
// Compass의 ObejctId와 헷갈리지 말자
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

router.post("/", async (req, res) => {
  if (validateUser(req.body).error) {
    res.status(400).send("Wrong Request");
    return;
  }
  const user = new User({
    name: req.body.name
  });
  const result = await user.save();
  res.status(200).send("Appropriate Request");
});

module.exports = router;
