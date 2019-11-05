const express = require("express");
const Joi = require("@hapi/joi");
const app = express();

const users = [
  { id: 1, name: "CRUD", email: "quddbs912@naver.com", birthDay: "11-05-1999" }
];

app.use(express.json()); //post 요청을 받도록 middleware 설정

function getUser(id) {
  return users.find(user => user.id === parseInt(id));
}

function validate(input) {
  const schema = Joi.object({
    name: Joi.string()
      .min(2)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    birthDay: Joi.date().less("1-1-2000")
  });
  return schema.validate(input);
}

app.get("/", (req, res) => {
  res.send("Full Screen");
});
// CRUD
// READ
app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/user/:id", (req, res) => {
  const user = getUser(req.params.id);
  if (!user) {
    res.send("User not exist!");
    return;
  }
  res.send(user);
});
// CREATE
app.post("/api/user", (req, res) => {
  console.log(validate(req.body));
  const { error } = validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }
  const user = {
    id: userId,
    name: req.body.name,
    email: req.body.email,
    birthDay: req.body.birthDay
  };
  userId++;
  users.push(user);
  res.send(user);
});
// update
// patch:일부를 수정, put: 한 요소 전체를 교체한다는 느낌
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
  user.birthDay = birthDay;
  res.send(user);
});
// DELETE
app.delete("/api/user/:id", (req, res) => {
  const user = getUser(req.params.id);
  if (!user) {
    res.send("User not exist");
  } else {
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(user);
  }
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}....`));
