const express = require("express");
const { User, validateUser } = require("../models/user");
const router = express.Router();
const wrapper = require("../common/wrapper");

router.get(
  "/",
  wrapper(async (req, res, next) => {
    const users = await User.find();
    res.send(users);
    next();
  })
);

// get요청의 :id와 req.params.id의 id와 같음
// Compass의 ObejctId와 헷갈리지 말자
router.get(
  "/:id",
  wrapper(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.send(user);
    next();
  })
);

router.post(
  "/",
  wrapper(async (req, res, next) => {
    if (validateUser(req.body).error) {
      res.status(400).send("Wrog Request");
      next();
      return;
    }
    const user = new User({
      name: req.body.name
    });
    const result = await user.save();
    res.status(200).send(result);
    next();
  })
);

module.exports = router;
