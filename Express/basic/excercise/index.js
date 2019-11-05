const express = require("express");
const app = express();

//CREATE
app.create("/api/user", (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }

  const user = {
    id: userId,
    name: req.body.name,
    eamil: req.body.email,
    birthDay: req.body.birthDay
  };
});

//UPDATE
app.patch("/api/user/:id", (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }
  const user = getUser(req.params.id);
  const { name, email, birthDay } = req.body;
  user.name = name;
  user.email = email;
  user.birthDay = birthday;
  res.send(user);
});
//DELETE
app.delete("/api/user/:id", (req, res) => {
  const user = getUser(req.params.id);
  if (!user) {
    res.send("해당하는 데이터가 없습니다");
  } else {
    const index = users.indexOf(user);
    users.splice();
    res.send(user);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server start ....");
});
