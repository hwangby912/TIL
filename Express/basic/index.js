const express = require("express");
const Joi = require("@hapi/joi");
const helmet = require("helmet");
const app = express();

app.use(helmet());
app.use(express.json()); // 미들웨어

const courses = [
  { id: 1, name: "HappyHacking!" },
  { id: 2, name: "Real Artist Ship" },
  { id: 3, name: "See the invisible" }
];

function getCourseById(id) {
  const coureseId = parseInt(id);
  return (course = courses.find(el => el.id === coureseId));
}

function validate(input) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(10)
      .alphanum()
      .required(),
    email: Joi.string().email()
  });
  return schema.validate(input);
}

app.get("/", (req, res) => {
  res.send("HPHK!");
});

//router middleware입니다.
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/course/:id", (req, res) => {
  const course = getCourseById(req.params.id);
  if (!course) {
    res.status(404).send("course not exist");
  } else {
    res.send(`<h1>${course.name}</h1>`);
  }
});

app.post("/api/course", (req, res, error) => {
  console.log(validate(req.body));
  if (error) {
    res.send(error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: value.name,
    email: value.email
  };
  courses.push(course);
  res.send(course);
});
// patch:일부를 수정, put: 한 요소 전체를 교체한다는 느낌
app.patch("/api/course/:id", (req, res) => {
  const course = getCourseById(req.params.id);
  if (!course) {
    res.send("data not exist");
  } else {
    const name = req.body.name;
    course.name = name;
    res.send(course);
  }
});

app.delete("/api/course/:id", (req, res) => {
  const course = getCourseById(req.params.id);
  if (!course) {
    res.send("data not exist");
  } else {
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
  }
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}....`));
